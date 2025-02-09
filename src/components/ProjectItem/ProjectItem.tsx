import React from "react";

import { Project } from "@/types/project";
import {
    StyledProjectItem,
    StyledProjectItemHeader,
    StyledProjectDescription,
    StyledProjectLink,
    StyledArrowProjectSvg,
    StyledProjectItemHeaderWrapper,
    StyledProjectLinksWrapper,
} from "./ProjectItem.styled";

interface ProjectData {
    project: Project;
}

const ProjectItem: React.FC<ProjectData> = ({ project }) => {
    return (
        <StyledProjectItem>
            <StyledProjectItemHeaderWrapper
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledArrowProjectSvg />
                <StyledProjectItemHeader>
                    {project.name}
                </StyledProjectItemHeader>
            </StyledProjectItemHeaderWrapper>
            <StyledProjectDescription>
                {project.description}
            </StyledProjectDescription>

            {project.stack && (
                <StyledProjectDescription>
                    Stack: {project.stack}
                </StyledProjectDescription>
            )}
            <StyledProjectLinksWrapper>
                {project.linkFront && (
                    <StyledProjectLink
                        href={project.linkFront}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Frontend link
                    </StyledProjectLink>
                )}

                {project.linkBack && (
                    <StyledProjectLink
                        href={project.linkBack}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Backend link
                    </StyledProjectLink>
                )}
            </StyledProjectLinksWrapper>
        </StyledProjectItem>
    );
};

export default ProjectItem;
