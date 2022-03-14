const notes = [500, 200, 100, 50, 20, 10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]



const getChange = (price, paidAmount) => {
    //constant payback
    const completePayback = paidAmount - price
    console.log(`You have to pay: ${price}€.\nYou gave ${paidAmount}€.\nYou get back: ${completePayback}€`)

    if (completePayback < 0) {
        console.log(`Sorry, thats not enough money. You are missing ${Math.abs(completePayback)}€`)
    } else {
        //updated payback if note is in the paybackNotes array
        let currentPayback = paidAmount - price

        //collection of notes needed for the payback
        let paybackNotes = []

        //sum of the collected paybackNotes 
        let sum = 0;

        //as long as the sum of the paybackNotes is less than the completePayback
        while (sum.toFixed(2) <= completePayback) {

            //push the first element of the note array which is smaller than the updatedPayback
            paybackNotes.push(notes.find((el) => currentPayback - el > 0))

            //get the sum of the currently collected paypack Notes
            sum = paybackNotes.reduce((acc, curr) => acc += curr)

            //changes the updatedPayback to the new payback
            currentPayback = completePayback.toFixed(2) - sum


        }

        //filters undefined values out of PaybackNotes
        let filteredPaybackNotes = paybackNotes.filter(el => typeof el === 'number')

        let result = filteredPaybackNotes.reduce((acc, curr) => {
            if (!acc[curr]) {
                acc[curr] = 1
            } else {
                acc[curr] += 1
            }
            return acc
        }, {})

        console.log('________________________________________________________')
        console.log()
        console.log('You will get your change like this: \n')
        //sort the notes from highest to lowest value
        let sortedResult = Object.keys(result).sort((a, b) => b - a)

        //prints sorted result
        sortedResult.forEach(el => {
            console.log(`${result[el]}x ${el}€`)
        })

        console.log('________________________________________________________')
        console.log('________________________________________________________')
        console.log()
        console.log()

    }
}


getChange(2.25, 10)
