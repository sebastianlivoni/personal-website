import Nav from '../components/navigation/nav';

function AboutPage() {
  return (
    <>
      <div className="font-poppins bg-gray-200 dark:bg-custom-dark-blue transition pb-12 md:pb-0">
        <div> {/* This div is for sticky navbar to not overflow with other content */}
          <Nav />
          <h1>Lol</h1>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
