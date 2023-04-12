const totalIncome = document.getElementById('button-click').addEventListener('click', function() {
    const getTotalIncome = document.getElementById('total');
    const Income = getTotalIncome.value;
    const incomeTotal = parseFloat(Income);

    const houseRent = document.getElementById('rent');
    const education = document.getElementById('education');
    const food = document.getElementById('food');
    const family = document.getElementById('family');
    const others = document.getElementById('others');

    const gethouseRent = houseRent.value;
    const geteducation = education.value;
    const getfood = food.value;
    const getfamily = family.value;
    const getothers = others.value;


    const spendTotal = parseFloat(gethouseRent) + parseFloat(geteducation) + parseFloat(getfood) + parseFloat(getfamily) + parseFloat(getothers);

    const spendValue = document.getElementById('spend');
    spendValue.innerText = spendTotal;

    const savings = incomeTotal - spendTotal;
    if (savings > 0) {
        const save = document.getElementById('savings');
        save.innerText = savings;
    } else {
        const save = document.getElementById('savings');
        save.innerText = "NO Savings";
    }



    houseRent.value = "";
    education.value = "";
    food.value = "";
    family.value = "";
    others.value = "";
    getTotalIncome.value = "";

})