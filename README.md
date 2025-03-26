# ABC Ignite Gym Busyness Feature 

### Demo
Check out the demo video here: https://youtu.be/3_3UuiuFhew or run the project on your own device (see instructions below).

## Project Overview
A data-driven feature designed to solve gym member anxiety by providing real-time and predictive gym occupancy insights. When members open their app, they can see the current busyness of the gym. Using theprediction feature, they can also plan around peak times.

### Tech Stack
- React
- Vite
- Tailwind CSS

I chose this tech stack, because my goal was to build quickly and get a first prototype of what the feature might look like. However, I opted for Tailwind CSS for easy modern and consistent styling.

### Why
First-time gymgoers often feel gym anxiety or “gymtimidation”. This feature helps them plan when a less-busy time slot that fits into their schedule. Owners might appreciate engaging their newest customers to keep their churn rates low. The prediction feature would be especially useful during seasonal surges. For example, people express how frustrating it is that gyms are always packed in January. This feature could build a predictive model based on previous years’data and help people decide when to go.

### Future Implementation 
- [ ] Using barcode scanning

Right now, I calculate the current and future busyness based on some mock data. However, I know that my Club16 app shows me my exact times I scanned in, so this information could be leveraged to first provide real-time updates based on barcode scans and over time create a dataset of scan times, and train predictive models on it.
- [ ] Switch branches

Allow users to see busyness at gyms other than their home branch. This could be useful for premium tier members who can access any branch. It could also even encourage regular members to upgrade or pay a drop in free if a different branch is not busy while their home branch is

## Running locally
Clone the repo via terminal
```
git clone https://github.com/jappun/abc-fitness
```
Move into the project folder
```
cd abc-fitness
```
Install dependencies
```
npm instsall
```
Run the project
```
npm run dev
```
You should now be able to open the project on http://localhost:5173/ 
