// 2383 - Minimum Hours of Training to Win a Competition

function minNumberOfHours(initialEnergy, initialExperience, energy, experience) {
    const totalEnergy = energy.reduce((s, e) => s + e) + 1;
    const needEnergy = totalEnergy > initialEnergy ? totalEnergy - initialEnergy : 0;
    let exp = initialExperience;
    let needExperience = 0;
    for (let i = 0; i < experience.length; i++) {
        if (exp <= experience[i]) {
            const need = experience[i] - exp + 1;
            exp += need;
            needExperience += need;
        }
        exp += experience[i];
    }
    return needEnergy + needExperience;
}
