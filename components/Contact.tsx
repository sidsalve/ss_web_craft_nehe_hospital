// components/Contact.tsx

export default function Contact({ data }: any) {

    return (
        <section
            id="contact"
            className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-sky-50 to-white"
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center mb-10 lg:mb-14">

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                        {data.heading || "Contact Us"}
                    </h2>

                    <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                        {data.subheading ||
                            "We are available 24/7 for emergency and child care services. Feel free to contact us anytime."}
                    </p>

                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Contact Information */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">

                        {/* Phone */}
                        <div className="flex items-start gap-4">

                            <div className="bg-sky-100 text-sky-600 p-3 rounded-lg">
                                📞
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Phone
                                </h3>
                                <p className="text-slate-600">
                                    {data.phone}
                                </p>
                            </div>

                        </div>


                        {/* Email (optional) */}
                        {data.email && (
                            <div className="flex items-start gap-4">

                                <div className="bg-sky-100 text-sky-600 p-3 rounded-lg">
                                    ✉️
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Email
                                    </h3>
                                    <p className="text-slate-600">
                                        {data.email}
                                    </p>
                                </div>

                            </div>
                        )}


                        {/* Address */}
                        <div className="flex items-start gap-4">

                            <div className="bg-sky-100 text-sky-600 p-3 rounded-lg">
                                📍
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Address
                                </h3>
                                <p className="text-slate-600">
                                    {data.address}
                                </p>
                            </div>

                        </div>


                        {/* Working Hours (optional) */}
                        {data.hours && (
                            <div className="flex items-start gap-4">

                                <div className="bg-sky-100 text-sky-600 p-3 rounded-lg">
                                    🕒
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Working Hours
                                    </h3>
                                    <p className="text-slate-600">
                                        {data.hours}
                                    </p>
                                </div>

                            </div>
                        )}

                    </div>


                    {/* Google Map */}
                    <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">

                        {/* <iframe
                            className="w-full h-[300px] sm:h-[400px] lg:h-full"
                            src={data.mapEmbed}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hospital Location Map"
                        /> */}

                        <iframe className="w-full h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.46803231995165!2d74.64904102146626!3d19.396243696878848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc939ad6bf2cc3%3A0x2ef660355b04e95c!2sNehe%20Children&#39;s%20Hospital!5e1!3m2!1sen!2sin!4v1772022211732!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


                    </div>

                </div>

            </div>

        </section>
    );
}