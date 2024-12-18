let array = [];
let sum=0;

function isTheGradeGood()
{
    for(let i=0;i<5;i++)
        {
            array[i]=parseInt(prompt(`Please enter the ${i+1} grade so you can know if you passed`));
            
            if(!isNaN(array[i]))
            {
                if(array[i]<0)
                    {
                        alert(`You have entered a negative value please try again`);
                        break;
                    }
                    
                    else if (array[i]<5 && array[i]>=0)
                    {
                        alert(`You are in colledge you can't have a grade that is below 5`);
                        break;
                
                    }
                    else if (array[i]>10)
                        {
                        alert(`You can't have a grade that is above 10 try again`);
                        break;
                            
                        }
                        else
                        {
                            sum+=array[i];
                            if(sum/5>=8 && i==4)
                                {
                                alert(`YOU HAVE PASSED!!!`);
                                }
                                else if(sum/5<8 && i==4)
                                {
                                alert(`Sorry you have failed this class`);
                                }

                        }
            }
                else
                {
                    alert(`You have not entered a number try again`);
                    break;
                }
         }
            
}

isTheGradeGood();
