import React, { useState, useEffect } from "react";

import { StyledProjectsListWrapper } from "./ProjectsList.styled";
import ProjectItem from "../ProjectItem/ProjectItem";

import { Project } from "@/types/project";

const ProjectsList: React.FC = () => {
    const [projectsList, setProjectsList] = useState<Project[]>([]);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    "https://nu-backend-production.up.railway.app/api/portfolio"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data: Project[] = await response.json();
                setProjectsList(data);
            } catch (error) {
                console.error("Error to get data:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <StyledProjectsListWrapper>
            {projectsList.map((el) => (
                <ProjectItem key={el.id} project={el} />
            ))}
        </StyledProjectsListWrapper>
    );
};

export default ProjectsList;
