import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row my-12 py-24 items-center md:items-start md:justify-start md:px-12 max-w-5xl mx-auto">
      <div className="md:w-2/3 mb-6 md:mb-0 md:mr-12">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m always on the lookout for new opportunities and collaborations. Feel free to reach out to me via email at <a href="mailto:aadipa25@gmail.com" className="text-[#1FA2FF]">aadipa25@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/aadi-patel/" className="text-[#1FA2FF]" target="_blank" rel="noopener noreferrer">LinkedIn</a>. I am looking forward to connecting with you!
        </p>
      </div>
      <div className="flex flex-row justify-center md:justify-start items-center gap-4 md:gap-6">
        <Link href="https://github.com/aadipa1" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/github-icon.svg" alt="GitHub Icon" width={64} height={64} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/aadi-patel/" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin-icon.svg" alt="LinkedIn Icon" width={64} height={64} />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;


