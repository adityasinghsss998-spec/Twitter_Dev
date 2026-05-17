import multer from "multer";
import multers3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    // Fix: Credentials must be inside a 'credentials' object
    credentials: {
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        accessKeyId: process.env.ACCESS_KEY_ID
    }
});

const upload = multer({
    storage: multers3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        acl: 'public-read', // Requires ACLs enabled in S3 Console
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            // It's good practice to replace spaces in filenames to avoid URL issues
            const fileName = file.originalname.replace(/\s/g, '-');
            cb(null, `twitter-${Date.now()}-${fileName}`);
        }
    })
});

export default upload;