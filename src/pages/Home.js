import React from 'react';
import { Button, Container, Image, Row } from 'react-bootstrap';
import { MenuBar } from '../components/MenuBar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export function Home() {

    return (
        <>
            <MenuBar />
            <Container>
                <div className="text-center">
                    <Image src={'./assets/images/foto_perfil.png'} fluid className="pt-4" />
                </div>
                <p className="text-muted py-2">
                    Analista de Sistemas na <a href="https://unifip.edu.br/">UNIFIP</a>,  Co-fundador da <a href="https://fidbonus.com.br/">Fidbonus</a>, Bacharel em Sistemas de Informação pela UNIFIP.
                Possui mais de 7 anos de experiência como designer gráfico. Já trabalhou em projetos para startups brasileiras
                com o foco em desenvolvimento front-end. Hoje possui o foco em tecnologias Javascript para o desenvolvimento web e mobile.
            </p>
                <div className="text-center py-5">
                    <Link to="/projects">
                        <Button variant="outline-dark">ver meu trabalho</Button>
                    </Link>
                </div>
            </Container>
            <Footer />
        </>
    );
}