// 2353 - Design a Food Rating System

class FoodRatings {
    constructor(foods, cuisines, ratings) {
        const compare = (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]);
        this.ratings = new Map();
        this.cuisines = new Map();
        for (let i = 0; i < foods.length; i++) {
            const food = foods[i], cuisine = cuisines[i], rating = ratings[i];
            this.ratings.set(food, [cuisine, rating]);
            if (!this.cuisines.has(cuisine)) {
                this.cuisines.set(cuisine, new PriorityQueue({ compare }));
            }
            this.cuisines.get(cuisine).enqueue([food, rating]);
        }
    }
    changeRating(food, newRating) {
        const ratings = this.ratings;
        ratings.get(food)[1] = newRating;
        const pq = this.cuisines.get(ratings.get(food)[0]);
        pq.enqueue([food, newRating]);
        while (ratings.get(pq.front()[0])[1] !== pq.front()[1]) {
            pq.dequeue();
        }
    }
    highestRated(cuisine) {
        return this.cuisines.get(cuisine).front()[0];
    }
}
