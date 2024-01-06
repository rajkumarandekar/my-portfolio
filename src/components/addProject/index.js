import React, { useState, useEffect } from "react";
import "./index.css";

const projectList = [
  {
    id: 1,
    name: "Yoga",
    image:
      "https://res.cloudinary.com/dojn2omox/image/upload/v1704393205/vnkg5zfgctao7q1b8b6h.png",
    description:
      "Crafted as a Figma interface demonstration, this project showcases a portfolio designed around yoga.",
  },
  {
    id: 2,
    name: "Todolist",
    image:
      "https://res.cloudinary.com/dojn2omox/image/upload/v1704396948/ceaguwhwati5jmn1iokq.png",
    description:
      "Developed as an interface showcase, this project exemplifies a portfolio centered on a to-do list application.",
  },
  {
    id: 3,
    name: "Mobiles",
    image:
      "https://res.cloudinary.com/dofzu13gt/image/upload/v1704460832/Rectangle_7_1_gztagi.jpg",
    description:
      "Fashioned as an interface presentation, this project features a portfolio highlighting mobile devices.",
  },
];

const AddProject = () => {
  const [listDetails, setListDetails] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (storedProjects && storedProjects.length) {
      setListDetails(storedProjects);
    } else {
      setListDetails(projectList);
    }
  }, []);

  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const onSubmittingForm = (event) => {
    event.preventDefault();

    const random1 = Math.floor(Math.random() * 1000);
    const random2 = Math.floor(Math.random() * 100000);

    const newForm = {
      id: random1 + random2,
      name: projectName,
      link: projectLink,
      description: projectDescription,
      image: URL.createObjectURL(imageFile),
    };

    setListDetails((prevList) => [...prevList, newForm]);
    setProjectName("");
    setProjectLink("");
    setProjectDescription("");
    setImageFile(null);
  };

  const handleImageUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setImageFile(uploadedFile);
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(listDetails));
  }, [listDetails]);

  return (
    <>
      <div className="add-con">
        <h1 className="add-heading">Add Project</h1>
        <div className="bb"></div>
        <form className="formm" onSubmit={onSubmittingForm}>
          <div className="form-column">
            <label htmlFor="forProjectN" className="name-p">
              Project Name
            </label>

            <input
              type="text"
              id="forProjectN"
              value={projectName}
              placeholder="enter project name"
              onChange={(event) => setProjectName(event.target.value)}
              className="input-place"
            />
          </div>
          <div className="form-column">
            <label htmlFor="forProjectL" className="name-p">
              Project Link
            </label>
            <input
              type="text"
              id="forProjectL"
              placeholder="enter link"
              onChange={(event) => setProjectLink(event.target.value)}
              value={projectLink}
              className="input-place"
            />
          </div>
          <div className="form-column">
            <label htmlFor="forProjectD" className="name-p1">
              Description
            </label>

            <textarea
              cols="50"
              rows="80"
              id="forProjectD"
              onChange={(event) => setProjectDescription(event.target.value)}
              value={projectDescription}
              placeholder="enter description"
              className="input-place2"
            />
          </div>
          <div className="form-column">
            <label htmlFor="forProjectImg" className="name-p">
              Project Image
            </label>

            <input
              type="file"
              id="forProjectImg"
              onChange={handleImageUpload}
              accept="image/*"
            />
          </div>
          <div className="submit-btn">
            <button type="submit" className="button-adding">
              Add
            </button>
          </div>
        </form>
        <div className="img-liner">
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1704401772/Vector_3_e2syfr.jpg"
            alt="img22"
            className="img-liner1"
          />
        </div>
      </div>
      <div className="projects-container">
        <div className="name-con">
          <h1 className="all-head">Projects</h1>

          <div className="bs"></div>
        </div>

        {[...listDetails].map((eachItem) => (
          <div className="cart-con" id="projects" key={eachItem.id}>
            <div className="left">
              <h1 className="left-heading-name">{eachItem.name}</h1>
              <p className="left-para-name">{eachItem.description}</p>
              <button type="button" className="view-project1">
                View Project
              </button>
            </div>
            <div className="right">
              <img
                src={eachItem.image}
                alt={eachItem.name}
                className="right-img1"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="img-liner">
        <img
          src="https://res.cloudinary.com/dofzu13gt/image/upload/v1704401772/Vector_3_e2syfr.jpg"
          alt="img22"
          className="img-liner1"
        />
      </div>
    </>
  );
};

export default AddProject;
