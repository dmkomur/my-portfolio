import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
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
            <AnimatePresence>
                {projectsList.map((el) => (
                    <motion.div
                        key="projectslist"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ProjectItem key={el.id} project={el} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </StyledProjectsListWrapper>
    );
};

export default ProjectsList;
