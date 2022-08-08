let xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true)
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText)
        console.log(JSON.parse(this.responseText));
        timing = 'daily'
        
        idhourArr = ['hourseOfWork',"hourseOfPlay", 'hourseOfStudy',  'hourseOfExercise', 'hourseOfSocial', 'hourseOfCare']
        idhourArrlast = ['hourseOfWorkLast',"hourseOfPlayLast", 'hourseOfStudyLast',  'hourseOfExerciseLast', 'hourseOfSocialLast', 'hourseOfCareLast']
       function show() {
        for (let i = 0; i < data.length; i++) {
            console.log(i)
            document.getElementById(idhourArr[i]).innerHTML = `${data[i].timeframes.daily.current}hrs`
            document.getElementById(idhourArrlast[i]).innerHTML = `last day - ${data[i].timeframes.daily.previous}hrs`
           } 
       } 
show()
     document.getElementById('daily').onclick =  function(){
         for (let i = 0; i < data.length; i++) {
         console.log(i)
         document.getElementById(idhourArr[i]).innerHTML = `${data[i].timeframes.daily.current}hrs`
         document.getElementById(idhourArrlast[i]).innerHTML = `last day - ${data[i].timeframes.daily.previous}hrs`
        }           
        }
      document.getElementById('weekly').onclick = function (){
         for (let i = 0; i < data.length; i++) {
         console.log(i)
         document.getElementById(idhourArr[i]).innerHTML = `${data[i].timeframes.weekly.current}hrs`
         document.getElementById(idhourArrlast[i]).innerHTML = `last week - ${data[i].timeframes.weekly.previous}hrs`
        }           
        }
      document.getElementById('monthly').onclick = function(){
         for (let i = 0; i < data.length; i++) {
         console.log(i)
         document.getElementById(idhourArr[i]).innerHTML = `${data[i].timeframes.monthly.current}hrs`
         document.getElementById(idhourArrlast[i]).innerHTML = `last month - ${data[i].timeframes.monthly.previous}hrs`
        }           
        }

    }
   
};
xhr.send();