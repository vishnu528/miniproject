import React, { useState } from "react";

const SimpleUpload = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    if (file) {
      formData.append("file", file);
    }

    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("File:", formData.get("file"));

    setName("");
    setEmail("");
    setFile(null);
    e.target.reset();
  };

  return (
    <div>
      <h2>Simple Upload</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default SimpleUpload;
