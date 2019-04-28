const DisneyFooter = () => {
  return (
    <div className="min-h-24">
      <ul className="flex flex-col md:flex-row p-5    text-xs text-gray-600 mx-auto justify-center">
        <li className="px-5">
          <a href="https://disneytermsofuse.com/english/" target="_blank">
            Terms of Use
          </a>
        </li>
        <li className="px-5">
          <a
            href="https://privacy.thewaltdisneycompany.com/en/"
            target="_blank"
          />
        </li>
        <li className="px-5">
          <a
            href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/"
            target="_blank"
          >
            Your California Privacy Rights
          </a>
        </li>
        <li className="px-5">
          <a href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/">
            Children's Online Privacy Policy
          </a>{" "}
        </li>
        <li className="px-5">
          <a
            href="https://jobs.disneycareers.com/category/disney-streaming-jobs/391-1635-24091/61719/1"
            target="_blank"
          >
            Careers
          </a>
        </li>
        <li className="px-5">Content on Disney+ is subject to availability.</li>
        <li className="px-5">© Disney. All Rights Reserved.</li>
      </ul>
    </div>
  );
};

export default DisneyFooter;
