import React from 'react';
import GoogleMapReact from 'google-map-react';



type ContactProps = {
    name: string,
    email: string,
    lat: number,
    lon: number,
    city: string
    state: string
}


const Contact: React.FC<ContactProps> = ({name, email, lat, lon, city, state}: ContactProps) => {
    return (
        <article className="portfolio__contact">
            <h2>Contact</h2>
            <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <section>
                <section className="portfolio__contact__contact-methods-container">
                    <section className="portfolio__contact__contact-methods-container__contact-methods">
                        <div className="portfolio__contact__contact-methods-container__contact-methods__name">
                            <h3>
                                Name
                            </h3>
                            <p>{name}</p>
                        </div>
                        <div className="portfolio__contact__contact-methods-container__contact-methods__email">
                            <h3>
                                Email
                            </h3>
                            <p>{email}</p>                            
                        </div>
                        <section className="contact-map">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={{lat: 41.8781, lng: -87.6298}}
                                defaultZoom={30}
                            >
                            </GoogleMapReact>
                        </section>
                    </section>
                </section>
                <section className="portfolio__contact__contact-form-container">
                    <form className="portfolio__sidebar__contact-form-container__form">

                    </form>
                </section>
            </section>

        </article>
    );
}



export default Contact;