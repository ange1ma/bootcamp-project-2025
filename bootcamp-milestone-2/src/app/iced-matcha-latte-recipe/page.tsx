import Image from "next/image";

export default function IcedMatchaLatteRecipe() {
  return (
    <main>
      <div className="matcha">
        <h1 className="page-title">Iced Matcha Latte Recipe</h1>
        <p className="date">10-10-2025</p>
        <Image src="/mika4.png" alt="this is an image" width={500} height={400}/>
        <p className="content">
          Here's a super simple, like this will take you less than 5 minutes,
          recipe for an iced matcha latte:
        </p>
        <h2>Ingredients</h2>
        <ul>
          <li>1.5 tsp matcha powder</li>
          <li>1/4 cup hot water</li>
          <li>1/2 glass oat milk (varies depending on your preference)</li>
          <li>1 tbsp vanilla syrup</li>
          <li>As much ice as you'd like!</li>
        </ul>
        <h2>Directions</h2>
        <ul>
          <li>
            In a small bowl, whisk matcha powder and hot water until frothy. I
            use a bamboo whisk but there are other alternatives, like electric
            milk frothers, etc.
          </li>
          <li>
            Mix in the vanilla syrup. It doesn't have to strictly be vanilla
            syrup; feel free to experiment!
          </li>
          <li>
            Fill your glass with ice. I usually fill it halfway with ice.
          </li>
          <li>
            Pour in the milk into the glass. You can pour however much milk you
            want, but make sure there's enough space in the glass for the matcha
            mixture.
          </li>
          <li>Pour in the matcha mixture.</li>
          <li>Stir gently and enjoy! ★</li>
        </ul>
      </div>
    </main>
  );
}