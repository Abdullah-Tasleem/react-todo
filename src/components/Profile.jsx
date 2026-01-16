function Profile() {
  return (
    <>
      <h1>This is profile page</h1>
      <ProfileCard name="John Doe" age={30} profession="Software Developer">
        <p>This is additional information about John Doe.</p>
      </ProfileCard>
      <ProfileCard name="Jane Smith" age={28} profession="Graphic Designer">
        <p>This is additional information about Jane Smith.</p>
      </ProfileCard>
    </>
  );
}
export default Profile;

function ProfileCard({ name, age, profession, children }) {
    return (
        <>
            <h2>Name: {name}</h2>
            <h4>Age: {age}</h4>
            <h4>Profession: {profession}</h4>
            <p>{children}</p>
        </>
    )
}