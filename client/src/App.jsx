import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from 'axios';

function App() {
  // Separate state for form data and the file
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [file, setFile] = useState(null); // State to hold the selected file

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Get the first selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(formData, file);

    try {
      // Use FormData to handle file upload
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      if (file) {
        data.append('file', file); // Append the file to the FormData
      }

      // Send POST request with Axios
      await axios.post(import.meta.env.VITE_USER_API, data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Correct header for file upload
        },
      });

      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  const handleMultipleSubmit = async (e) => {
    e.preventDefault(); // Prevent default button behavior
    // Simulate multiple form submissions
    try {
      for (let i = 0; i < 10; i++) {
        await handleSubmit(e); // Pass the event to handleSubmit
        console.log(`Form ${i + 1} submitted successfully`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <Header />
        <div className="container mx-auto p-4 bg-slate-300 shadow-md mt-5">
          <div className="bg-white p-6 w-full max-w-md mx-auto rounded shadow-md my-auto">
            <div>
              <form>
                <div>
                  <label htmlFor="name">Name:</label>
                </div>
                <div className="bg-slate-100 p-2 mb-2">
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="w-full h-full outline-none bg-transparent"
                    name="name"
                    required
                    onChange={handleFormChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                </div>
                <div className="bg-slate-100 p-2 mb-2">
                  <input
                    type="text"
                    placeholder="Enter your email..."
                    className="w-full h-full outline-none bg-transparent"
                    name="email"
                    required
                    onChange={handleFormChange}
                  />
                </div>
                <div>
                  <label htmlFor="file">File:</label>
                </div>
                <div className="bg-slate-100 p-2 mb-2">
                  <input
                    type="file"
                    className="w-full h-full outline-none bg-transparent font-sans uppercase font-semibold"
                    name="file"
                    required
                    onChange={handleFileChange} // Use the separate file handler
                    multiple
                  />
                </div>

                <button
                  className="lg: bg-black text-white px-6 py-[1.5vmin] w-full max-w-[150px] text-[2.5vmin] rounded-full hover:scale-110 transition-all mx-auto block mt-6 max-sm:px-1 max-sm:text-sm max-md:text-sm max-lg:mx-auto"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                
                <button
                  className="lg: bg-black text-white px-6 py-[1.5vmin] w-full max-w-[150px] text-[2.5vmin] rounded-full hover:scale-110 transition-all mx-auto block mt-6 max-sm:px-1 max-sm:text-sm max-md:text-sm max-lg:mx-auto"
                  onClick={handleMultipleSubmit}
                >
                  Submit Multiple
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
