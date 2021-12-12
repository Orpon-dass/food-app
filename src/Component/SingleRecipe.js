import React from 'react';
import { Link } from 'react-router-dom';
import SingleRecipeFive from '../img/single-recipe-five.jpg';
import SingleRecipeFour from '../img/single-recipe-four.jpg';
import SingleRecipeOne from '../img/single-recipe-one.jpg';
import SingleRecipeSix from '../img/single-recipe-six.jpg';
import SingleRecipeThree from '../img/single-recipe-three.jpg';
import SingleRecipeTwo from '../img/single-recipe-two.jpg';
import Footer from './Footer';
import Header from './Header';
import TagCircle from './TagCircle';

export default function SingleRecipe() {
  return (
    <>
      <Header />
      <div className="container mt-4 single-recipe-bg">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="single-recipe-wraper">
              <h1 className="fs-1 p-2">1-Bowl Chocolate Peppermint Cookies (Vegan + GF)</h1>
              <div className="tag-circle d-flex justify-content-center mt-2 mb-2">
                <TagCircle bgcolor="#003811" circleText="GF" />
                <TagCircle bgcolor="#b45026" circleText="VG" />
                <TagCircle bgcolor="#ffb5a3" circleText="V" />
                <TagCircle bgcolor="#f31a0a" circleText="DF" />
              </div>
              <img className="img-fluid m-2" src={SingleRecipeOne} alt="SingleRecipeOne" />
              <p className="p-2 fs-4">
                Showing the fudgy inside texture of a chocolate peppermint cookie on a stack of more
                cookies Friends, if you love our Fudgy Vegan Brownie Cookies (they’re a fan
                favorite!), we have a holiday twist that must go on the cookie-making list! These
                chocolate peppermint cookies are{' '}
                <strong>crispy on the edges, fudgy in the middle,</strong> plus super chocolaty and
                perfectly sweet and minty! We are truly obsessed — these are too good to leave out
                for Santa (sorry, Santa).
              </p>
              <p className="p-2 fs-4">
                Bonus points? They’re so easy to prepare (just 1 bowl and 30 minutes required)!
                Let’s make cookies!{' '}
              </p>
              <img className="img-fluid m-2" src={SingleRecipeTwo} alt="SingleRecipeTwo" />
              <h1>How to Make Chocolate Peppermint Cookies</h1>
              <p className="p-2 fs-4">
                These quick & easy chocolate peppermint cookies start with our trusty flax eggs as
                the egg substitute and binder. Once the flax has had a few minutes to rest and
                thicken, we start adding the remaining ingredients to the same bowl (yay for minimal
                dishes!)
              </p>
              <img className="img-fluid m-2" src={SingleRecipeThree} alt="SingleRecipeThree" />
              <p className="p-2 fs-4">
                Melted coconut oil helps create crispy edges and a fudgy center, while coconut sugar
                or cane sugar provides the sweetness, vanilla extract is a cookie classic, and
                peppermint extract makes them perfectly minty!
              </p>
              <p className="p-2 fs-4">
                The gluten-free (and grain-free) flour duo in these cookies relies on trusty almond
                flour for a tender center plus tapioca flour for crispy edges and more binding.
              </p>
              <img className="img-fluid m-2" src={SingleRecipeFour} alt="SingleRecipeFour" />
              <p className="p-2 fs-4">
                Cocoa powder + chocolate chips give these double chocolate goodness, while baking
                powder and salt provide lift and flavor.
              </p>
              <img className="img-fluid m-2" src={SingleRecipeFive} alt="SingleRecipeFive" />
              <p className="p-2 fs-4">
                The final touch is a sprinkling of crushed candy canes for holiday cheer and extra
                minty flavor!
              </p>
              <img className="img-fluid m-2" src={SingleRecipeSix} alt="SingleRecipeSix" />
              <p className="p-2 fs-4">We hope you LOVE these cookies! They’re:</p>
              <h4 className="m-2">Rich</h4>
              <h4 className="m-2">Fudgy</h4>
              <h4 className="m-2">Chocolaty</h4>
              <h4 className="m-2">Perfectly sweet</h4>
              <h4 className="m-2">Quick & easy</h4>
              <h4 className="m-2">& Undeniably delicious!</h4>
              <p className="m-2 fs-4">
                They’re the perfect healthier dessert to celebrate the holiday season, bring to
                cookie parties, or gift to family and friends. Dip them in hot chocolate or another
                cozy drink and wrap yourself in a warm blanket for all the holiday feels!
              </p>

              <table className="table mmt-2 mb-2">
                <thead className="table-light">
                  <th>Prep Time </th>
                  <th>Cook Time </th>
                  <th>Total Time </th>
                </thead>
                <tbody>
                  <tr>
                    <td>15 minutes</td>
                    <td>15 minutes</td>
                    <td>30 minutes</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="me-2 ms-2 mt-4 mb-4">Ingredients</h3>
              <ul className="ingridient m-2">
                <li>7 Tbsp flaxseed meal (ground flax seeds)</li>
                <li>17.5 Tbsp water</li>
                <li>0.88 cup melted coconut oil (use refined for less coconut flavor)</li>
                <li>1.17 cup coconut sugar (or organic cane sugar)</li>
                <li>3.5 tsp vanilla extract</li>
                <li>
                  0.88 tsp peppermint extract (add a little more if you like extra peppermint
                  flavor)
                </li>
                <li>2.63 cup almond flour</li>
                <li>1.17 cup tapioca flour (also called tapioca starch)</li>
                <li>1.17 cup cocoa powder</li>
                <li>1.75 tsp baking powde</li>
                <li>0.88 tsp sea salt</li>
                <li>1.75 cup vegan semisweet or dark chocolate chips (we like Enjoy Life)</li>
                <li>7-14 Tbsp crushed candy canes (~2-4 candy canes // we like Yum Earth)</li>
              </ul>
              <h3 className="me-2 ms-2 mt-4 mb-4">Instructions</h3>
              <ol type="1" className="instruction m-2">
                <li>
                  Preheat the oven to 350 degrees F (176 C) and line a cookie sheet with parchment
                  paper.
                </li>
                <li>
                  To a large mixing bowl, add flax meal and water to create flax eggs. Let stand for
                  5 minutes to thicken.
                </li>
                <li>
                  To the flax eggs, add melted coconut oil, coconut (or cane) sugar, vanilla
                  extract, and peppermint extract. Whisk well to combine. The mixture should have
                  the texture of caramel. To the wet ingredients, add almond flour, tapioca flour,
                  cocoa powder, baking powder, and salt. Mix the wet and dry ingredients together
                  with a spatula until thoroughly combined and there are no streaks of flour left
                  remaining. Add in the chocolate chips and stir again. It should be a thick,
                  scoopable batter.
                </li>
                <li>
                  Using a small (~1 ½ Tbsp) cookie scoop (we like this one) or spoon, scoop out 12
                  equally sized cookies and place them onto the prepared baking sheet. Flatten the
                  cookies slightly so there is a place for the crushed candy canes to go. Onto each
                  cookie, sprinkle 1/2 -1 teaspoon of crushed candy cane. Press down gently to help
                  the candy canes stick to the cookies.
                </li>
                <li>
                  Bake for 12-15 minutes. The candy cane will be melted and the cookies slightly
                  soft. Let cool at least 10 minutes before enjoying!
                </li>
                <li>
                  Best when fresh. Store leftovers covered at room temperature for 1-2 days, in the
                  refrigerator 4-5 days, or in the freezer for up to 1 month.
                </li>
              </ol>
              <h1 className="m-2">Video</h1>
              <div className="ratio ratio-16x9 mt-4 mb-4 ms-2 me-2">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/vigUN5aoMm8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="fs-1">More Holiday Cookie Recipes</div>
              <ul className="fs-5 mb-4 holidays-recipe-link">
                <Link to="recipe" style={{ textDecoration: 'none' }}>
                  <li>
                    <u>1-Bowl Ginger Cookies (V/GF)</u>
                  </li>
                </Link>
                <Link to="recipe" style={{ textDecoration: 'none' }}>
                  <li>
                    <u> Vegan Gluten-Free Gingerbread Men</u>
                  </li>
                </Link>
                <Link to="recipe" style={{ textDecoration: 'none' }}>
                  <li>
                    <u>1-Bowl Vegan Sugar Cookies</u>
                  </li>
                </Link>
                <Link to="recipe" style={{ textDecoration: 'none' }}>
                  <li>
                    <u>Grain-Free Cut Out Sugar Cookies (1 Bowl!)</u>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
