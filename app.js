let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value'); 

btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        console.log(styles);
        if(styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        }else {
            count = 0;
        }
        if(count > 0){
            document.body.style.backgroundColor = "pink";
            value.style.color = "green";
        }
        if(count >= 5){
            document.body.style.backgroundColor = "gray";
            value.style.color = "purple";
        }
          if(count >= 10){
            document.body.style.backgroundColor = "green";
            value.style.color = "blue";
        }
        if(count < 0){
            document.body.style.backgroundColor = "red";
            value.style.color = "yellow";
        }
           if(count === 0){
            document.body.style.backgroundColor = "cyan";
            value.style.color = "#222";
        }
        value.textContent = count;
    })
});