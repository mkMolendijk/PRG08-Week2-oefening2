# PRG08-Week2-oefening2

## Opdracht

- Ga verder met de code van 'Close Call' uit Week 2 oefening 1
- Gebruik de 'road' achtergrond in plaats van de cliff
- Laat 6 auto's onder elkaar van links buiten het scherm het beeld inrijden. Elke auto heeft een random speed en start x positie.
- Er staat een random aantal rotsen verdeeld over het scherm
- Gebruik Arrays in Game.ts om de cars en rocks in op te slaan.
- Als je op een auto klikt gaat de auto afremmen.
- Zodra een auto stil staat zonder te botsen met een rots, krijg je een aantal punten dat gelijk is aan de x positie van de auto
- De game loop checkt of er een auto is die botst met een rots
- Zodra een auto een rots raakt gaat je totaalscore naar 0
- Auto's mogen elkaar wel raken. Rotsen mogen elkaar wel raken.

## Bonus opdracht

- Je kan de hele game resetten door de game instance te verwijderen en een nieuwe te maken. Je kan daar een aparte functie voor schrijven.
- Alle instances en settings staan dan automatisch weer op de begin stand.
- Je moet wel de oude divs van de cars en rocks uit de DOM verwijderen, voordat je een nieuwe game instance aanmaakt.

## Voorbeeldcode

### For Of Loop

```
let cars = [new Car(), new Car()];

for (let c of cars) {
   console.log("car position is " + c.x);
}
```
