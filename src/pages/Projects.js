import React, { useEffect, useState } from 'react';
import { MenuBar } from '../components/MenuBar';
import { Footer } from '../components/Footer';
import * as BehanceService from '../services/BehanceService';

export function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        try {
            const { http_code, projects } = await BehanceService.projects();
            if (http_code === 200) {
                setProjects(projects);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <MenuBar />
            <div className="container py-4">

                <div className="row">
                    {projects.map(project => (
                        <div className="col-md-4 py-3">
                            <div key={project.id} className="card">
                                <a href={project.url} target="_blank">
                                    <img src={project.covers[404]} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-text">{project.name}</h5>
                                        {project.fields.map(field => (
                                            <span className="card-text px-2">{field}</span>
                                        ))}
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    );
}