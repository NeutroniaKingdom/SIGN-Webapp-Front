import flagBase from '../assets/images/flagBase.svg'

const HomeView = () => {
    return (
        <div className="w-full flex flex-col mt-10">
          <div className="wrapper">
            <p className="text-2xl mb-5">
              Bienvenue sur le site officiel du Royaume du Neutronia
            </p>
            <img src={flagBase} alt="[Drapeau National]" className="h-[200px] w-auto mx-auto mb-5"/>
            <p className="text-justify">
              Le Neutronia en forme longue le Royaume du Neutronia est une nation, au stade de micro-nation dynamique et émergente, depuis bien longtemps imaginé par son fondateur, elle communique sur la Plateforme Discord que depuis le 24 Rajab 1444 (AH) soit depuis le 15 Février 2023, symbolisant les aspirations d'une communauté engagée. Fondée sur des principes de paix et de respect mutuel, cette micro-nation se développe avec un engagement indéfectible envers l'unité, l'innovation scientifique et la justice.</p>
          </div>
          
        </div>
        
    )
}

export default HomeView;