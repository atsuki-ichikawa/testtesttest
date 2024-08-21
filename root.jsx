import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error parsing file' });
      return;
    }

    const filePath = files.image.filepath;

    // Now you can send the file to your multimodal API
    const result = yourMultimodalApiCall(filePath);

    res.status(200).json(result);
  });
};

const yourMultimodalApiCall = (filePath) => {
  // Implement the API call logic here
  // For example, using `fetch` to send the image to your API endpoint

  return { message: 'API call result' };
};
