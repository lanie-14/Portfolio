import React from 'react'

const Reflection = () => {
  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        
        <header className="mb-20 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 font-serif italic">"Design is not just what it looks like.<br/> Design is how it works."</h1>
            <p className="text-stone-500 uppercase tracking-widest font-bold text-sm">— Understanding User Perspectives</p>
        </header>

        <div className="bg-white border border-stone-100 rounded-[2.5rem] p-10 md:p-16 shadow-lg shadow-stone-200/50">
          <article className="prose prose-stone lg:prose-lg max-w-none prose-headings:font-black">
            <h2>The Empathy of Interfaces</h2>
            <p className="lead">
              Transitioning fully into UI/UX Design taught me one vital lesson: it doesn't matter how incredible the underlying code is if the user cannot navigate it. Usability is the bridge between the product and the human.
            </p>
            
            <hr className="my-10 border-stone-200" />
            
            <h2>Learning When to Stop</h2>
            <p>
              As designers, it is tempting to continually add elements, animations, and extra visual flair. However, creating this minimalist portfolio reinforced my belief in "less is more." Eliminating distractions ensures that the true message and functionality take front stage.
            </p>

            <h2>Moving Forward</h2>
            <p>
              Every new user research session or wireframe draft I complete teaches me something new about cognitive load and human behavior. I look forward to tackling more complex problems, creating designs that not only look pleasing but also solve real, tangible obstacles for people.
            </p>
          </article>
        </div>

      </div>
    </div>
  )
}

export default Reflection
