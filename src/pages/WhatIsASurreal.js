import React, { useState, createContext, useContext, useEffect } from 'react';
import { Alert, Space, Image } from 'antd';
import surrealNumberLine from '../img/SurrealNumberConstruction.png';


import Navbar from '../components/Navbar';

function WhatIsASurreal() {
    useEffect(() => { // Change Title
        document.title = 'What is a Surreal Number? | Surreal Number Website';
    }, []);

    useEffect(()=>{ // Use MathJax
      if(typeof window?.MathJax !== "undefined"){
        window.MathJax.typeset()
      }
    },[]);
  
    return (
      <div className="App" style={{textAlign: 'center'}}>
  
        <Navbar active='about' />
  
        <div className='content' style={{width: '60%', margin: 'auto'}}>
            <h1>What is a Surreal Number?</h1>
            <p style={{fontFamily: 'Courier New', textAlign: 'right'}}>By Luke Sequeira</p>

            <em>For fast facts, see <a href='fast-facts'>Fast Facts</a></em>

            <h2>Why Surreal Numbers?</h2>

            <p>Most people have heard the phrase: <em>"Infinity's not a number"</em>. But, why can't it be? What, intrinsic to infinity, prevents us from doing mathematics with it? Some would argue that we must have {'\\(\\infty+1 = \\infty\\)'}, which would indeed yield a contradiction. But what if we allow {'\\(\\infty+1\\)'} to be its own number?
            <br/><br/>
            The surreal numbers are a particularly important set. In fact, they form an ordered field, much like the reals. However, they are much more powerful—<b>the surreal numbers contain every ordered field</b> (formally, we'd say there's an isomorphism between every ordered field and a subset of the surreals). This means the integers, the rational numbers, the real numbers, every finite (ordered) field, and even non-fields like the ordinal numbers are contained in the surreals.</p>
            
            <br/><br/>
            <h2>What are Surreal Numbers Made off?</h2>

            <p>Surreal numbers are made of <u>other</u> sets of surreal numbers. If we have two sets of surreal numbers, {'\\(L\\)'} and {'\\(R\\)'}, we can make a new surreal number: {'$$s = \\{ L \\: | \\: R \\},$$'} where {'\\(s\\)'} is somewhere <b>between</b> the elements of {'\\(L\\)'} and {'\\(R\\)'}. This is nicely visualized like so:</p>
        
            <Image src={surrealNumberLine} width={'90%'}></Image>
            
            <p>
                Of course, for this definition to make sense we must place a restriction on {'\\(L\\)'} and {'\\(R\\)'}, in fact, a single restriction will suffice: every element of {'\\(L\\)'} must be <b>strictly less than</b> every element of {'\\(R\\)'}.
                <br/><br/>
                Now this all begs the question, how do we get our first surreal number? Although we have no numbers to begin, we, in fact, do still have a set, namely, the empty set! We define:
                {'$$0 = \\{ \\; | \\; \\}$$'}
                It turns out this number behaves like the additive identity, that is, for any surreal, {'\\(0+s = s\\)'}. We shall not concern ourself with the underlying formalism (ie, proving things) in this article, but we shall be more thorough in a later article.

                Now, when we have surreal numbers {'\\(l_1, l_2, l_3, \\ldots \\)'}, and {'\\(r_1, r_2, r_3, \\ldots \\)'} (not necessarily countably indexed), there are three things we can do:
            </p>

            <ul style={{textAlign: 'left'}}>
                <li>From {'\\( \\{ l_1, l_2, l_3, \\ldots \\: | \\; \\} \\)'} we get the 'simplest' number <em>strictly greater</em> than every {'\\(l_k\\)'}.</li>
                <li>From {'\\( \\{  \\; | \\: r_1, r_2, r_3, \\ldots \\} \\)'} we get the 'simplest' number <em>strictly less</em> than every {'\\(r_k\\)'}.</li>
                <li>From {'\\( \\{ l_1, l_2, l_3, \\ldots \\: | \\: r_1, r_2, r_3, \\ldots \\} \\)'} we get the 'simplest' number <em>in between</em> than every {'\\(l_k\\)'} and {'\\(r_j\\)'}.</li>
            </ul>

            Which means from 0 we can get:

            <ul style={{textAlign: 'left'}}>
                <li>{'\\( 1 =  \\{ 0 \\: | \\; \\} \\)'} </li>
                <li>{'\\( -1 =  \\{ \\; | \\: 0 \\} \\)'} </li>
            </ul>

            <p>
                Note, that our construction proceeds in stages. So, to each number in a stage, we can assign a birthday! Birthdays are <a href='https://en.wikipedia.org/wiki/Ordinal_number'>ordinal numbers</a>, so that {'\\( b(0) = 0 \\)'}, and {'\\( b(1) = b(-1) = 1 \\)'}.
                
                <br/><br/>
                So, the numbers with a <b>birthday of 2</b> are then:
            </p>

            <ul style={{textAlign: 'left'}}>
                <li>{'\\( 2 =  \\{ 1 \\: | \\; \\} = \\{ 0, 1 \\: | \\; \\} \\)'} </li>
                <li>{'\\( -2 =  \\{ \\; | \\: -1 \\} = \\{ \\; | \\: 1, 0, -1 \\} \\)'} </li>
                <li>{'\\( \\frac{1}{2} =  \\{ 0 \\: | \\: 1 \\} \\)'}</li>
                <li>{'\\( - \\frac{1}{2} =  \\{ -1 \\: | \\: 0 \\} \\)'}</li>
            </ul>

            <p>Note that some valid numbers we can make with the tools we have aren't new:</p>

            <ul style={{textAlign: 'left'}}>
                <li>{'\\( 0 =  \\{ -1 \\: | \\: 1 \\} \\)'}</li>
            </ul>

            <p>
                Instead of mindlessly continuing this construction, we opt instead observe inductive behaviour.

                <br/><br/>
                Firstly, we can see that, in all the cases we've tried, {'\\( \\{ s \\: | \\; \\} = s+1 \\)'}. It turns out this is almost right—it's certainly true if {'\\( s \\)'} is an integer. But, in general, {'$$\\{ s \\: | \\; \\} = ⌊s⌋+1$$'} Why, you may ask? It turns out, {'\\( ⌊s⌋+1 \\)'} is (in general) simpler than {'\\( s+1 \\)'}, that is to say, it has <b>an earlier birthday</b>. For example, {'\\( \\{ \\frac{1}{2} \\: | \\; \\} = 1 \\)'}, not {'\\( 1.5 \\)'}, since {'\\( 1 \\)'} has an earlier birthday.
            
                <br/><br/>
                What about the {'\\( \\frac{1}{2} =  \\{ 0 \\: | \\: 1 \\} \\)'}? It would seem like we're taking the average of two numbers. But, this can't be the case, since {'\\( \\{ -1 \\: | \\: 7.5 \\} = 0 \\)'}.

                <br/><br/>
                But it turns out our intuition is correct when the numbers are close enough. Formally, {'$$ \\frac{2L+1}{2^{n+1}} =  \\{ \\frac{L}{2^{n}} \\: | \\: \\frac{L+1}{2^{n}} \\},$$'} when the fractions are reasonable (integers variables, completely reduced, {'\\( n \\)'} positive).

                <br/><br/>
                The acute eye will notice, that this means we can represent every number with a terminating decimal expansion base 2!
                
                As a reminder, binary decimals work as follows: {'$$0.1001101_2 = 2^{-1} + 2^{-4} + 2^{-5} +  2^{-7}.$$'}

                Now it turns out, every number that is representable in base 10 is representable in base 2. So, we can restate the previous theorem as follows:

                <br/><br/>

                Assume (WLOG) we have created some number like {'\\( 0.01110100...0_2 \\)'} and {'\\( 0.01110100...1_2 \\)'}. Then we can make {'\\( 0.01110100...01_2 \\)'}. In other words, if we've created all binary decimals of length {'\\( n \\)'}, we can make all binary decimals of length {'\\( n+1 \\)'}!
                <br/><br/>
                Which means, <b>every terminating binary decimal has a finite birthday</b>.

                <br/><br/>
                Now we have all the information we need to go to infinity.

                <br/><br/>
                In the past, we've only been considering <em>finite</em> birthdays. But, there's no reasons birthdays must be finite. So, we should consider what happens when we allow infinite birthdays of numbers (formally known as <b>Transfinite Induction</b>).

                <br/><br/>
                The most natural number to consider (pun not intended) is the smallest infinite ordinal—called {'\\( \\omega \\)'}. If you've never heard of them, you can think of the ordinals as an extension of the counting numbers {'\\( (0, 1, 2, \\ldots) \\)'}. {'\\( \\omega \\)'} is the first ordinal that is larger than every natural number, hence, it's called the limit of the natural numbers.

                <br/><br/>
                What numbers are made on day {'\\( \\omega \\)'}? Recall, that on finite days we have made all numbers with a finite base-2 decimal expansion. Now, we claim, on day {'\\( \\omega \\)'} we get all infinite binary decimals. How?

                <br/><br/>
                The construction is quite simple: {'$$ x = \\{ \\text{All terminating base-2 decimals less than } x_{\\mathbb{R}} \\: | \\: \\text{All terminating base-2 decimals greater than } x_{\\mathbb{R}} \\}. $$'}
                
                Where {'\\( x_{\\mathbb{R}} \\)'} is the real-number version of {'\\( x \\)'}. To show {'\\( x = x_{\\mathbb{R}} \\)'}, consider the following.
                
                <br/><br/>
                Suppose {'\\( x < x_{\\mathbb{R}} \\)'}. Between any two distinct real numbers, there is a real number with a finite base-2 decimal expansion (consider the first place where they differ). Which means there is a {'\\( l \\in L_x \\)'} where {'\\( x \\leq l \\leq x_{\\mathbb{R}} \\)'}. But, by the definition of a surreal number, we must have {'\\( x > l \\)'}! So we have a contradiction. We can similarly prove that {'\\( x > x_{\\mathbb{R}} \\)'} yields a contradiction.

                <br/><br/>
                More intuitively, if our number is something like {'$$ 0.111010110\\ldots_2 $$'} then it is bounded below by {'$$ 0.1_2, 0.11_2, 0.111_2, 0.1110_2, 0.11101_2, \\ldots $$'} We're creating infinite decimals by taking a 'limit' of finite decimals!

                <br/><br/>
                So, every real number is also a surreal number—for every real number has an infinite or finite binary expansion. But, what about the infinite surreals we've been talking about?

                <br/><br/>
                Well, it turns out, on day {'\\( \\omega \\)'} we have many weird surreals! There are two important ones:

                First, notice that on day {'\\( n \\)'}, the largest number created is always {'\\( n \\)'}. This suggests that the same is true for day {'\\( \\omega \\)'}! In fact, our first infinite surreal (although note, it shall not turn out to be the smallest as in the case of ordinals) is {'$$ \\omega = \\{ 1, 2, 3, \\ldots \\: | \\; \\} $$'}

                By definition, {'\\( \\omega \\)'} is the simplest surreal number greater than every integer surreal number.

                <br/><br/>
                But, we also have another important surreal: and this time instead of really big, it's really small. It's what's known as an infinitessimal.

                We define {'$$ \\frac{1}{\\omega} = \\{0 \\: | \\: \\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\ldots \\} $$'}

                {'\\( \\frac{1}{\\omega} \\)'} is a number smaller than every positive real number, but greater than {'\\( 0 \\)'}. Again, it is not the smallest such number, but it is still very small compared to any positive real number.

                <br/><br/>
                Now we can go on with the process, to day {'\\( \\omega + 1  \\)'}, {'\\( \\omega + 2 \\)'}, {'\\( \\omega \\times 2 \\)'}, {'\\( \\omega^2 \\)'}, etc.

                Note that, since {'\\( \\omega + 1 = \\{ \\omega \\: | \\; \\} \\)'}, we (by definition) have {'\\( \\omega + 1 > \\omega \\)'}. In particular, {'\\( \\omega + 1 \\neq \\omega \\)'}! Infinity-plus-one is a new number!

                <br/><br/>
                And we can get many more exotic surreal numbers: Things like {'\\( \\sqrt{2} + \\pi \\omega - \\frac{1}{\\ln(\\omega)} + \\omega^e \\)'}. Note, all these satisfy properties of a field: things like {'$$ 2 \\omega - \\omega - \\omega = 0 $$'}

                And, that concludes this construction of the surreal numbers. Some readers may notice that we have skipped a few steps required for a formal theory of surreal numbers. That will be tackled in a later article. But now, you should have a good understanding of what the surreal numbers are, and an intuition as to why they're so awesome.
            </p>

        </div>
      </div>
    );
  }

export default WhatIsASurreal;