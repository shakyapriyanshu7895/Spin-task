let spin = async () => {
    let text = $('#exampleFormControlTextarea1').val();
    if(text.length===0){
        alert("Please fill the text");
      }else{
        try {
            let response = await fetch('/getSynonyms', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ text })
            });
        
            let rewrittenText = await response.json();
            
        
            $('.text-rewritten').val(rewrittenText.text);
          } catch (err) {
            console.error(err.message);
          }
      }
    
  };
  
  // Call the spin function when needed, such as on a button click event
  