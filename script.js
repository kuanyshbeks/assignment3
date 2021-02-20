function calculate() {
    var Initial = 500;
    var EducationDegreeValue = Number(document.getElementById("education").value);
    var FamilyNetValue = Number(document.getElementById("family").value);
    var SkillsValue = 0;
        for (i = 0; i < document.skills.option.length; i++){
            if(document.skills.option[i].checked == true){
                SkillsValue += Number(document.skills.option[i].value);
            }
        }
    var AgeValue = 1;
        for (i = 0; i < document.age.option.length; i++){
            if(document.age.option[i].checked == true){
                AgeValue = Number(document.age.option[i].value);
                break;
            }
        }
    var final = (((Initial * EducationDegreeValue * FamilyNetValue) + SkillsValue) * AgeValue);
        if(document.reputation.option[0].checked == true){
            final *= document.reputation.option[0].value;
        }
        if(document.reputation.option[1].checked == true){
            final *= document.reputation.option[1].value;
        }
        if(document.reputation.option[2].checked == true){
            final -= document.reputation.option[2].value;
        }
    alert(final + "$");
}
