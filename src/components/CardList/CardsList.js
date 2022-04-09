import Card from "../Card/Card";
import "./CardsList.scss";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function CardsList() {
  const [projects, setProjects] = useState([]);
  const projectsCollectionRef = collection(db, "/projects");

  useEffect(() => {
    const getProject = async () => {
      const data = await getDocs(projectsCollectionRef);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProject();
    console.log(projects);
  }, []);

  console.log(projects);

  return (
    <ul className="CardsList">
      {projects.map((card) => (
        <Card card={card} />
      ))}
    </ul>
  );
}

export default CardsList;
