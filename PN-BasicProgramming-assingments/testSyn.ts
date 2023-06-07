1; //Declare an Enum called Direction with values Up, Down, Left, Right;
Direction: any = ["up", "down", "left", "right"];
// Enumerator Direction = {"up", "down", "left", "right"}
///3. Declare en interface called VehicleInfo with fields name as string, year as integer, isNew as boolean, and state with
// two values "new" and "used"

interface VehicleInfo {
    name:string,
    year:number,
    isNew:boolean,
   state: "new" | "used"
}