import img1 from '../../img/img1.png';
import './SobreMim.css'
import Header from '../Header';


const SobreMim = () => {
    return (
        <>
            <Header titulo="Sobre Mim"/>
            <main className='styleMain'>
                <p>
                    Olá, sou o Nathan Martins Raphael tenho 19 anos. Atualmente estou cursando técnico em informática no Senac Largo Treze. Com este curso, tenho trabalhado com as linguagens HTML, CSS e Javascript, além da biblioteca React para a construção de aplicações front-end. No que diz respeito ao back-end, tenho prática com banco de dados relacional (SQL), em conjunto com a tecnologia Node JS para o desenvolvimento de API's. Além disso, possuo conhecimento em Java no desenvolvimento de sistemas desktop. <br/>
                    Sou organizado, pontual, tenho um bom desenvolvimento em trabalho em equipe e facilidade em comunicação com o público. Possuo domínio da linguagem estrangeira inglês, adquirido com anos de aperfeiçoamento autodidata. Agora, início uma jornada como estagiário na empresa Incentiva Mais, onde estou tendo a oportunidade de desenvolver minhas habilidades e conhecimento por participar diretamente de projetos de desenvolvimento de software. Ademais, a fim de manter o versionamento dos projetos, tenho prática na tecnologia GIT.
                </p>
            </main>
        </>
    )
}

export default SobreMim;