type Room = {
  path: string;
  title: string;
  text: string;
  doors: {}[];
};

export async function getRoom(path: string) {
  const response = await fetch(`${process.env.API_URL}/rooms/path/${path}`);

  if (!response.ok) {
    return {
      title: "Quarto Vazio",
      text: "Não há nada neste quarto. Você só pode escolher morrer.",
    };
    // throw new Error("Failed to get Rooms");
  }
  const data = await response.json();

  return data;
}

export default async function page({ params }: { params: { path: string } }) {
  const room = await getRoom(params.path);
  console.log(room);
  return (
    <>
      <h1>{room.title}</h1>
      <p>{room.text}</p>
      {/* {room.doors.map((door) => {
        <button>{door.title}</button>;
      })} */}
    </>
  );
}
