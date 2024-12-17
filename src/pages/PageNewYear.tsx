import { useEffect, useState } from 'react';
import "./PageNewYear.css"

function PageNewYear() {
  const calculateTimeDay = () => {
    const now = new Date(); //Donne la date d'aujourd'hui (Mois, Jour, Année, Heure, Min, Sec)
    //sans arguments. Si argument entre () c'est pour indiquer une date.
    const christmas = new Date(now.getFullYear(), 11, 31);
    //getFullYear() permet de récupérer juste l'année en nomber. Jamais d'argument en ()
    if (now > christmas) christmas.setFullYear(now.getFullYear() + 1);
    // Noël suivant si passé : setFullYear() permet de modifier ou définir une date
    //a partir dune const qui possède une date. Il prend max 3 arguments dans l'ordre : 
    //Année, Mois, Jours.

    const difference = christmas.getTime() - now.getTime();
    //Retourne le nombre de millisecondes entre maintenant et noel.

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeDay, setTimeDay] = useState(calculateTimeDay());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeDay(calculateTimeDay());
    }, 1000);
    return () => clearInterval(timer); // Nettoyer le timer
  }, []);
 //setInterval() Exécution d'une fonction a interval régulier en milisecond.

  return (
    <div className="NewYear">
      <h1>🎄 Compte à rebours avant le Nouvel An 🎅</h1>
      <p>
        {timeDay.days} jours, {timeDay.hours} heures, {timeDay.minutes} minutes, {timeDay.seconds} secondes
      </p>
      <div></div>
    </div>
  );
};

export default PageNewYear;
