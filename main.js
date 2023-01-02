// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum, dna,   
    mutate(){
      const randomNum = Math.floor(Math.random() * dna.length);
      const base = dna[randomNum];
      let newBase;
      do{
        newBase = returnRandBase();
      } while (newBase === base);
     console.log(randomNum + " '" + base + "' mutated to '" + newBase + "'");
     this.dna[randomNum] = newBase;
    },
    compareDNA(dna2){
      const persentsAtBase = 100 / this.dna.length;
      let outPercents = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === dna2[i]){
          outPercents += persentsAtBase;
        }
      }
      return `specimen #1 and specimen #2 have ${outPercents}% DNA in common`
    },
    willLikelySurvive(){
      const persentsAtBase = 100 / this.dna.length;
      let outPercents = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G'){
          outPercents += persentsAtBase;
        }
      }
      return outPercents >= 60;
    }
  };
};

const arraySurviveDNA = () => {
  const likelySurvivors = [];
  for(let i = 1; i <= 30; i ++){
    let checkedDNA;
    let isSurvive = false;
    do{
      checkedDNA = pAequorFactory(i, mockUpStrand());
      isSurvive = checkedDNA.willLikelySurvive();
    } while (!isSurvive);
    likelySurvivors.push(checkedDNA);
  }
  return likelySurvivors;
}

console.log(arrayDNA());




