import Image from "next/image";

export default function StrawberryMilkRecipe() {
  return (
    <main>
      <div className="strawberry">
        <h1 className="page-title">Strawberry Milk Recipe</h1>
        <p className="date">10-16-2025</p>
        <Image src="/strawberrymilk.png" alt="A picture of homemade strawberry milk" width={500} height={500}/>
        <p className="content">
          Here's a budget-friendly recipe for a refreshing glass of strawberry milk!
        </p>
        <h2>Ingredients</h2>
        <ul>
          <li>5–6 strawberries, no leaves</li>
          <li>1 1/2 tbsp sugar</li>
          <li>1/2 glass oat milk (varies depending on your preference)</li>
          <li>As much ice as you'd like!</li>
        </ul>
        <h2>Directions</h2>
        <ul>
          <li>
            In a small cup, mash together the strawberries and sugar until it forms a
            nice strawberry syrup. It's ok to have some strawberry pieces—it does not
            have to be fully liquid.
          </li>
          <li>Pour the strawberry syrup into the glass.</li>
          <li>Fill your glass with ice. I usually fill it halfway with ice.</li>
          <li>
            Pour in the milk into the glass. You can pour however much milk you want.
          </li>
          <li>Stir gently and enjoy! ★</li>
        </ul>
      </div>
    </main>
  );
}
