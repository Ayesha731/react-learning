import { Box, Button, Card, CardActions, CardContent,Grid,Stack,TextField, Typography} from "@mui/material"
import { useState } from "react";

function TextForm(props) {
  const[text, setText]=useState(" ");
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  const [fWord, findWord] = useState("");
const [rWord, replaceWord] = useState("");

  let countChar = 0,
  countCons = 0;
    const handleUpFunction =()=>{

        // alert("You clicked on it");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted too Upper case successfully!","success")
    }
    const handleDownFunction =()=>{

        // alert("You clicked on it");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted too Lower case successfully!","success")
    }
    const handleClearFunction =()=>{

        // alert("You clicked on it");
        let newText="";
        setText(newText);
        props.showAlert("Clear the textbox successfully!","success")
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleChangeText =(e)=>{
        console.log("Change the text");
        setText(e.target.value);
    }
    // Function to count Vowels:

const handleVoClick = () => {
  for (count = 0; count <= text.length; count++) {
    if (text.charAt(count).match(/[aeiouAEIOU]/)) {
      countChar++;
      setCount (countChar);
    }
  }
  console.log("No. of Vowels are: " + countChar);
};

// Function to count Consonants:
const handleCoClick = () => {
  for (count1 = 0; count1 <= text.length; count1++) {
    if (
      text
        .charAt(count1)
        .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
    ) {
      countCons++;
      setCount1(countCons);
    }
  }
  console.log("No. of Consonants are: " + countCons);
}
const handlefindChange = (event) => {
  findWord(event.target.value);
};
const handleReplaceChange = (event) => {
console.log(replaceWord(event.target.value)) ;
};

const handledelete=() =>{
  let newText = text.replaceAll(fword,"");
  setText(newText);
}

const handleReverse = (event) => {
  /* Convert string to array*/
  let strArr = text.split("");
  /* Reverse array*/
  strArr = strArr.reverse();
  /* Convert array to string*/
  let newText = strArr.join("");
  setText(newText);
};


//this function converts upper case to lower case and lower case to upper case
  const handleToggleCaseClick = () => {
    let words = text.split(" ");
    let newText = words
      .map((word) => {
        let newWord = "";
        for (let i = 0; i < word.length; i++) {
          let char = word.charAt(i);
          if (char >= "A" && char <= "Z") {
            char = char.toLowerCase();
          } else if (char >= "a" && char <= "z") {
            char = char.toUpperCase();
          }
          newWord += char;
        }

        return newWord;
      })
      .join(" ");

    setText(newText);
  };

//this converts text to sentence case meaning the first word starts with a captial letter the rest of the words are lowercase
const handleSentenceCaseClick = () => {
    let lowerCase = text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)/g;
    let sentences = lowerCase.match(regex);
    let newText = sentences
      .map((sentence) => {
        return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence);
      })
      .join("");

    setText(newText);
  };

//this function converts the first letter of every word to uppercase the rest of letters are lower case
const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };
//break para into one line
  const handleSPerLineClick =() =>{
    let newText = text.replaceAll('.',"\n");
    setText(newText);
}
//casing
const wCase = () => {
  let newText = "";
  let u = true;
  text.split("").forEach(el => {
      newText += (u === true) ? el.toUpperCase() : el.toLowerCase();
      u = (u === true) ? false : true;
  });
  setText(newText);
}
//To remove extra spaces from text:
const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] != undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
    }
    const undo=()=>{
      let itm=Localstorage.getitem(1)
      SetText(itm) 
      }

      const inputHandler = (event) => {
        setText(event.target.value);
      }
  
      const handleclipclick=()=>{
        
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard','success');
      }
  return (
    <>
 <Box sx={{padding:2}} bgcolor={"background.default"} color={"text.primary"}>
    
     <Card sx={{ width:"100%" , margin :"auto" ,padding:5, boxShadow:"12px 12px 12px 10px grey"}}>
      <CardContent>
        <Typography variant="h4">Enter the text to Ananlyze Below:</Typography>
      <TextField fullWidth="true" margin="dense"  variant="outlined"  multiline
          maxRows={12} value={text}  onChange={handleChangeText}/>
      {/* <TextField fullWidth="true" margin="dense"  variant="outlined"  
           value={fWord}   onChange = {handleFindChange}/>
          
      <TextField fullWidth="true" margin="dense"  variant="outlined"  
        value={rWord}    onChange = {handleReplaceChange}/>
           */}
         

      </CardContent>
      <CardActions >
       <Grid spacing={2}>
       <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white", margin:"3px", '&:hover': {
          backgroundColor: "#e65100", // Change this to the desired hover color
        },}} onClick={handleUpFunction}>Convet to Upper Case</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white", margin:"3px", '&:hover': {
          backgroundColor: '#e65100', // Change this to the desired hover color
        },}} onClick={handleDownFunction}>Convet to Lower Case</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white",margin:"3px",   '&:hover': {
          backgroundColor: '#e65100', // Change this to the desired hover color
        },}} onClick={handleClearFunction}>Clear Text</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white", margin:"3px",  '&:hover': {
          backgroundColor: '#e65100', // Change this to the desired hover color
        },}} onClick={speak}>Speak Text</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white",margin:"3px",   '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={handleVoClick}>Count Vowels</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white",margin:"3px",   '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={handleCoClick}>Count Constent</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white", margin:"3px",  '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={handleReverse}>Reverse</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white", margin:"3px",  '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={handleToggleCaseClick}>Toggle Case</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white",margin:"3px",   '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={handleSentenceCaseClick}>Sentence</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white", margin:"3px",  '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={handleCapitalizeWordClick }>First Character Capital</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white",margin:"3px",   '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={handleSPerLineClick }>Setence per Line</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white",  margin:"3px", '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={wCase  }>Casing</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white",  margin:"3px", '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={handleExtraSpaces }>Remove  Extra Spaces</Button>
        <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white",  margin:"3px", '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={handleclipclick }>Copy Text</Button>
        {/* <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white",  margin:"3px", '&:hover': {
          backgroundColor: '#e65100', 
        },}} onClick={undo}>Undo</Button> */}
        {/* <Button disabled={text.length===0} size="large" sx={{backgroundColor:"black", color:"white", margin:"3px",   '&:hover': {
          backgroundColor: '#e65100', // Change this to the desired hover color
        },}} onClick={handledelete}>Find and Delete Words</Button> */}
 
       </Grid>
        
      </CardActions>
    </Card>
    <Box sx={{width:"100%" , margin :"auto" , padding:5, }}>
<Typography variant="h4">Your Text Summary:</Typography>
<Typography> <strong>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </strong> words,<strong>{text.length}</strong> characters </Typography>
<Typography><strong>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length}</strong> Minutes read </Typography>
<Typography><strong>{count}</strong> No. of Vowels</Typography>
<Typography><strong>{count1}</strong> No. of Consonants</Typography>

<Typography variant="h4">Preview:</Typography>
<Typography>{text.length>1?text:"Nothing to preview!"} </Typography>


 </Box>
 </Box>
 
 </>
  )
}


export default TextForm
