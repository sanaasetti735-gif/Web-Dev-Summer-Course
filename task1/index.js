// creations of array students//
 let students=[
    { name:'sara', age:21, grade:14},
    { name:'ahmed' , age:22, grade:15},
    { name:'yasmine', age: 16, grade:16},
 ];
 // task1:display all students using loop// 
   for(let i=0; i<students.length;i++){
   
      console.log(students[i].name);
      console.log(students[i].age);
      console.log(students[i].grade);
   }
   // task2//
       let  admis=true;
        for(let i=0;i<students.length;i++){
         if(students[i].grade==10||students[i].grade>10){
            admis=true;
         }
         else{
            admis=false;
         }
        }
      if(admis){
         console.log(students[i].name,'admis');
      }
         else{
          console.log(students[i].name,'ajourne' );

      }
      //task3///
      //count number of students//
       let count=0;
        for(let i=0; i<students.length;i++){
         let admis=(students[i].grade>=10);
         if(admis==true){
            count++;
         }
         console.log(count);
      }


      // task4//
      let max=students[0].grade;
        for(let i=0;i<students.length;i++){
          if(students[i].grade>max){
            max=students[i].grade;
          }
          else{
            max=students[0].grade;
          }
          console.log(max,'maxgrade');
        }
      //task5//
      
         function isadult(age){
            if(age>=18){
               return true;
            }
            else{
               return false;
            }
         }
        for(let i=0;i<students.length; i++){
           if(isadult(students[i].age)){
              console.log('the student is adult');
           }
           else{
            console.log('the student is not adult');
           }

        //task6: //
        //find trj3 object wahed exp: 3ndi 2 sara tdi lwla w t'e ignorer deuxieme//
        students.find(x => x.name==='sara');
        //filter: tjoz 3la array complet wtchof grade>=10//
        students.filter(x => x.grade>=10);
          
        //bonus//
        students.push({name:'hasnaa',grade:15});
        console.log(students);
        }
      
