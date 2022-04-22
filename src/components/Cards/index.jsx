import React from "react";
import { motion } from "framer-motion";
import useModal from "../../components/Modal/useModal";
import Modal from "../../components/Modal";

import Martine from "../../assets/img//Cards/martine.png";
import Martine2 from "../../assets/img//Funky/martine.png";
import Valentin from "../../assets/img//Cards/valentin.png";
import Valentin2 from "../../assets/img//Funky/valentin.png";
import Idriss from "../../assets/img//Cards/idriss.png";
import Idriss2 from "../../assets/img//Funky/idriss.png";
import Alienor from "../../assets/img//Cards/alienor.png";
import Alienor2 from "../../assets/img//Funky/alienor.png";
import Yann from "../../assets/img//Cards/yann.png";
import Yann2 from "../../assets/img//Funky/yann.png";
import Stella from "../../assets/img//Cards/stella.png";
import Stella2 from "../../assets/img//Funky/stella.png";
import Vincent from "../../assets/img//Cards/vincent.png";
import Vincent2 from "../../assets/img//Funky/vincent.png";
import Guillaume from "../../assets/img//Cards/guillaume.png";
import Guillaume2 from "../../assets/img//Funky/guillaume.png";
import Yoann from "../../assets/img//Cards/yoann.png";
import Yoann2 from "../../assets/img//Funky/yoann.png";
import LauraLi from "../../assets/img//Cards/laurali.png";
import LauraLi2 from "../../assets/img//Funky/laurali.png";
import Text from "../../assets/img//Cards/text.png";
import Text2 from "../../assets/img//Cards/text2.png";

import "./style.scss";

const details = [
  {
    id: 1,
    img: <img src={Martine2} alt="Martine" class="popup-img" loading="lazy" />,
    name: "martine",
    toggle: "toggleMartine",
    position: "directrice générale",
    description: (
      <p className="text">
        Martine a un don pour créer du lien, construire des relations pérennes
        dans l'espace professionnel <br class="none" /> et rendre heureux et
        serein tout un chacun. 🥰 Décoratrice dans une vie antérieure, notre
        bosse possède sûrement la plus grande collection <br class="none" /> de
        boutons, oui, de boutons ! Ce qu'on retient surtout, c'est son savoureux
        tiramisu qu’elle pourra bientôt faire tous les jours, puisqu’elle est à
        l’aube de nous confier, son « bébé » Zelda 🥧
      </p>
    ),
    color: "#f7ad77",
  },
  {
    id: 2,
    img: (
      <img src={Valentin2} alt="Valentin" class="popup-img" loading="lazy" />
    ),
    name: "valentin",
    position: "directeur commercial",
    description: (
      <p className="text">
        Notre directeur commercial “préféré”🕴Toujours à l’affût de nouvelles
        rencontres, et toujours à l'écoute attentive de ses clients et de leurs
        préoccupations. C’est un homme de lien et de proximité qui sera heureux
        de vous rendre heureux. La négociation, <br class="none" /> c’est son
        truc ! 🤝 Valentin dispose aussi du soutien sans faille de son fidèle
        Shelby, son compagnon trop mignon, qui est devenu la mascotte de
        l’agence ! 🐕
      </p>
    ),
    color: "#fcc10a",
  },
  {
    id: 3,
    img: <img src={Idriss2} alt="Idriss" class="popup-img" loading="lazy" />,
    name: "idriss",
    position: "développeur web",
    description: (
      <p className="text">
        Dernière recrue de la team Zelda ! 👨🏽‍💻 Particulièrement sensible au
        design, il prend un plaisir fou à intégrer et à coder avec pré-ci-sion,
        pour littéralement sublimer les maquettes dont il a la charge. Avec lui,
        c’est « pixel perfect » 👾 Passionné de musique, de sport et d’art en
        général, il est toujours en quête de nouvelles découvertes. Élevé au
        fromage, il milite pour la démocratisation des raclettes en plein été
        (ben oui…) 🧀
      </p>
    ),
    color: "#f18c92",
  },
  {
    id: 4,
    img: <img src={Alienor2} alt="Aliénor" class="popup-img" loading="lazy" />,
    name: "aliénor",
    position: "planneur stratégique",
    description: (
      <p className="text">
        Aliénor, comme son prénom ne l’indique pas, est notre cheville ouvrière…
        Planneur strat à l’origine, elle a l’œil partout et veille à la fois sur
        tous et sur chacun ainsi que sur le développement et l’avancée de chaque
        projet. En d’autres termes, elle « tient la baraque » ! Avec fermeté,
        doigté, et ce qui ne gâte rien, avec beaucoup de gentillesse. 👩‍👧‍👦 Autant
        vous dire qu'elle est trèèèèès occupée ! Alors si vous voulez la
        croiser, ce serait plutôt le WE, sur les pistes de ski ! ⛷️
      </p>
    ),
    color: "#ec6798",
  },
  {
    id: 5,
    img: <img src={Yann2} alt="Yann" class="popup-img" loading="lazy" />,
    name: "yann",
    position: "directeur artistique",
    description: (
      <p className="text">
        Designer lui-même, il sait tirer le meilleur des brillants créatifs qui
        l’entourent, en tenant compte des sensibilités et des talents de chacun,
        au service de la réussite des projets qui nous sont confiés. Excellent
        technicien, c’est également un homme de « process ». L’orga, c’est son
        kif ! 👨‍🎤 Il aime aussi, à temps perdu, travailler la matière :
        transformer et recycler le métal et le bois pour en faire de jolis
        objets : couteaux, cuillères… Il paraît même qu’il forge ! ⚒
      </p>
    ),
    color: "#add3a0",
  },
  {
    id: 6,
    img: <img src={Stella2} alt="Stella" class="popup-img" loading="lazy" />,
    name: "stella",
    position: "cheffe de projet",
    description: (
      <p className="text">
        Notre très grande cheffe de projet* ! ✨ Elle aime l'aspect
        pluridisciplinaire du travail en agence, particulièrement la stratégie
        marketing, la recherche et la création de tous les éléments qui mènent
        au succès d’une marque. Travailleuse acharnée, elle sait se montrer
        intraitable dans la recherche de la perfection. 💪 Elle est aussi une
        fan de musique inconditionnelle qui suit de près les tendances de ce
        marché. Surtout, elle adore la glace au Cookie Dough... 🍪 qu’elle
        engloutit littéralement sans aucun complexe, mais ça, ça reste entre
        nous 🤫😋 (* 1,83m sans talons, qu’elle adore porter évidemment)
      </p>
    ),
    color: "#ec6798",
  },
  {
    id: 7,
    img: <img src={Vincent2} alt="Vincent" class="popup-img" loading="lazy" />,
    name: "vincent",
    position: "designer graphique",
    description: (
      <p className="text">
        Un des plus « anciens » designers de l’agence, <br class="none" /> un
        talent indépendant qui a le sens des tendances. Originalité, finesse,
        subtilité, c’est depuis toujours <br class="none" /> un contributeur
        essentiel à la « patte » Zelda. <br class="none" /> Chaque mission le
        voit s’investir avec exigence <br class="none" /> et passion. Il sait
        imposer sa vision à travers un grand sens esthétique. 🔥 Que croyez-vous
        qu’il fasse, à part « ça » ? De la moto et de la peinture – on y revient
        toujours – mais en tant qu’artiste… 👨🏻‍🎨
      </p>
    ),
    color: "#add3a0",
  },
  {
    id: 8,
    img: (
      <img src={Guillaume2} alt="Guillaume" class="popup-img" loading="lazy" />
    ),
    name: "guillaume",
    position: "chef de projet",
    description: (
      <p className="text">
        Fraîchement arrivé parmi nous, c'est un as de l'organisation
        d'événements et de la gestion des relations publiques ! 🗓 Il aime
        particulièrement être <br class="none" /> au contact des clients et a un
        sacré sens <br class="none" /> de l'organisation, attention rien ne lui
        échappe ! 🤗 <br class="none" /> Sinon ? Amoureux de gastronomie, il
        enfile régulièrement son tablier de cuisto pour faire joujou avec tout
        plein d’instruments aux noms bizarres : <br class="none" /> cul de
        poule, chinois, corne, étamine... <br class="none" /> Vous voyez quoi
        mais à la fin, on se régale 👨‍🍳
      </p>
    ),
    color: "#da7857",
  },
  {
    id: 9,
    img: <img src={Yoann2} alt="Yoann" class="popup-img" loading="lazy" />,
    name: "yoann",
    position: "motion design",
    description: (
      <p className="text">
        Yoann ou THE motion designer de l'agence ! Le temps n’existe plus pour
        lui lorsqu’il s’agit de peaufiner effets, couleurs, rythmes et harmonie
        entre son et images… 👨🏻‍💻 Son but : que son chef de projet soit scotché et
        le client fier et heureux ! Il se passionne aussi pour : la photo, la musique… 🎸 (il est même prof de guitare à ses
        heures perdues), l'agence devrait peut-être monter un groupe de musique
        ? 🎶 C’est dire qu’il ne s’ennuie jamais !
      </p>
    ),
    color: "#7c87c2",
  },
  {
    id: 10,
    img: <img src={LauraLi2} alt="Laura-Li" class="popup-img" loading="lazy" />,
    name: "laura-li",
    position: "cheffe de projet",
    description: (
      <p className="text">
        Ce stage a été l’opportunité de découvrir pas à pas <br class="none" />{" "}
        ce métier qui l'attire depuis des années. 😍 Curieuse{" "}
        <br class="none" /> et perfectionniste, elle fait en sorte de ne pas
        perdre <br class="none" /> une miette de ce qui se passe auprès des
        différents membres de l’équipe, apportant clairement sa pierre{" "}
        <br class="none" /> à l’édifice ! 🤓 À noter : elle aime aussi chanter{" "}
        <br class="none" /> à tue-tête et surtout : c'est une fan
        inconditionnelle <br class="none" /> de chocolat ! Pour preuve : elle
        avait 3 calendriers <br class="none" /> de l'Avent cette année... 🍫
      </p>
    ),
    color: "#fcc10a",
  },
];

const Cards = () => {
  const { isShowing: isMartineShowed, toggle: toggleMartine } = useModal();
  const { isShowing: isValentinShowed, toggle: toggleValentin } = useModal();
  const { isShowing: isIdrissShowed, toggle: toggleIdriss } = useModal();
  const { isShowing: isAlienorShowed, toggle: toggleAlienor } = useModal();
  const { isShowing: isYannShowed, toggle: toggleYann } = useModal();
  const { isShowing: isStellaShowed, toggle: toggleStella } = useModal();
  const { isShowing: isVincentShowed, toggle: toggleVincent } = useModal();
  const { isShowing: isGuillaumeShowed, toggle: toggleGuillaume } = useModal();
  const { isShowing: isYoannShowed, toggle: toggleYoann } = useModal();
  const { isShowing: isMLauraLiShowed, toggle: toggleLauraLi } = useModal();

  return (
    <motion.div
      className="container"
      initial="initial"
      animate="in"
      variants={variants}
      transition={pageTransition}
    >
      <motion.div
        className="cards"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Text */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Text} alt="Zelda" class="cursor" />
          </div>
        </motion.div>

        {/* Martine */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Martine} alt="Martine" onClick={toggleMartine} />
          </div>
        </motion.div>

        {/* Valentin */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Valentin} alt="Valentin" onClick={toggleValentin} />
          </div>
        </motion.div>

        {/* Idriss */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Idriss} alt="Idriss" onClick={toggleIdriss} />
          </div>
        </motion.div>

        {/* Alienor */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Alienor} alt="Alienor" onClick={toggleAlienor} />
          </div>
        </motion.div>

        {/* Yann */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Yann} alt="Yann" onClick={toggleYann} />
          </div>
        </motion.div>

        {/* Stella */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Stella} alt="Stella" onClick={toggleStella} />
          </div>
        </motion.div>

        {/* Vincent */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Vincent} alt="Vincent" onClick={toggleVincent} />
          </div>
        </motion.div>

        {/* Guillaume */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Guillaume} alt="Guillaume" onClick={toggleGuillaume} />
          </div>
        </motion.div>

        {/* Yoann */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={Yoann} alt="Yoann" onClick={toggleYoann} />
          </div>
        </motion.div>

        {/* Laura-Li */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <img src={LauraLi} alt="Laura Li" onClick={toggleLauraLi} />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div className="card" variants={item}>
          <div className="card-img">
            <a href="https://zelda.fr" target="_blank" rel="noreferrer">
              <img src={Text2} alt="Bonne année" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal Martine */}
      <Modal
        isShowing={isMartineShowed}
        hide={toggleMartine}
        color={details[0].color}
      >
        <div className="popup">
          {details[0].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[0].name}</h2>
              <h3 className="subtitle">{details[0].position}</h3>
            </div>
            <p className="text">{details[0].description}</p>
          </div>
        </div>
      </Modal>

      {/* Modal Valentin */}
      <Modal
        isShowing={isValentinShowed}
        hide={toggleValentin}
        color={details[1].color}
      >
        <div className="popup">
          {details[1].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[1].name}</h2>
              <h3 className="subtitle">{details[1].position}</h3>
            </div>
            <p className="text">{details[1].description}</p>
          </div>
        </div>
      </Modal>

      {/* Modal Idriss */}
      <Modal
        isShowing={isIdrissShowed}
        hide={toggleIdriss}
        color={details[2].color}
      >
        <div className="popup">
          {details[2].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[2].name}</h2>
              <h3 className="subtitle">{details[2].position}</h3>
            </div>
            <p className="text">{details[2].description}</p>
          </div>
        </div>
      </Modal>

      {/* Modal Alienor */}
      <Modal
        isShowing={isAlienorShowed}
        hide={toggleAlienor}
        color={details[3].color}
      >
        <div className="popup">
          {details[3].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[3].name}</h2>
              <h3 className="subtitle">{details[3].position}</h3>
            </div>
            <p className="text">{details[3].description}</p>
          </div>
        </div>
      </Modal>

      {/* Modal Yann */}
      <Modal
        isShowing={isYannShowed}
        hide={toggleYann}
        color={details[4].color}
      >
        <div className="popup">
          {details[4].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[4].name}</h2>
              <h3 className="subtitle">{details[4].position}</h3>
            </div>
            <p className="text">{details[4].description}</p>
          </div>
        </div>
      </Modal>

      {/* Modal Stella */}
      <Modal
        isShowing={isStellaShowed}
        hide={toggleStella}
        color={details[5].color}
      >
        <div className="popup">
          {details[5].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[5].name}</h2>
              <h3 className="subtitle">{details[5].position}</h3>
            </div>
            <p className="text">{details[5].description}</p>
          </div>
        </div>
      </Modal>

      {/* Modal Vincent */}
      <Modal
        isShowing={isVincentShowed}
        hide={toggleVincent}
        color={details[6].color}
      >
        <div className="popup">
          {details[6].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[6].name}</h2>
              <h3 className="subtitle">{details[6].position}</h3>
            </div>
            <p className="text">{details[6].description}</p>
          </div>
        </div>
      </Modal>

      {/* Modal Guillaume */}
      <Modal
        isShowing={isGuillaumeShowed}
        hide={toggleGuillaume}
        color={details[7].color}
      >
        <div className="popup">
          {details[7].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[7].name}</h2>
              <h3 className="subtitle">{details[7].position}</h3>
            </div>
            <p className="text">{details[7].description}</p>
          </div>
        </div>
      </Modal>

      {/* Modal Yoann */}
      <Modal
        isShowing={isYoannShowed}
        hide={toggleYoann}
        color={details[8].color}
      >
        <div className="popup">
          {details[8].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[8].name}</h2>
              <h3 className="subtitle">{details[8].position}</h3>
            </div>
            <p className="text">{details[8].description}</p>
          </div>
        </div>
      </Modal>

      {/* Modal LauraLi */}
      <Modal
        isShowing={isMLauraLiShowed}
        hide={toggleLauraLi}
        color={details[9].color}
      >
        <div className="popup">
          {details[9].img}
          <div className="description">
            <div className="header">
              <h2 className="title">{details[9].name}</h2>
              <h3 className="subtitle">{details[9].position}</h3>
            </div>
            <p className="text">{details[9].description}</p>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
};

// Motion
const variants = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 3.5,
};

// Motion
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default Cards;
