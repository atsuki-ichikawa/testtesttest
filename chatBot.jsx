import { useState } from 'react';

export default function ChatBot() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      // Example of sending the image to your API
      const response = await fetch('/api/your-endpoint', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Send Image</button>
    </div>
  );
}
