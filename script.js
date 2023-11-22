document.querySelector('#root').insertAdjacentHTML("beforeend", `
    <form>
    <h1>Visszajelzés</h1>

    <input placeholder='tárgy'>

    <textarea placeholder='Megjegyzés'></textarea>

    <div>
    <input type='checkbox'>
    <p>Elolvastam és elfogadom az <span>Adatkezelési Tájékoztatót</span>.</p>
        </div>

    <div>
    <input type='checkbox'>
    <p>Szeretnék hírlevelet kapni.</p>
        </div>

    <button>Mentés</button>

    </form>

`)