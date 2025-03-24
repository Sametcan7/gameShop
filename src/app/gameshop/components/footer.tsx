export default function Footer() {
  return (
    <div className="max-lg:p-2 text-text-secondary p-8 bg-background-secondary mt-8 border-2 border-border">
      <div className="max-lg:flex-col flex max-lg:gap-4  flex-row  justify-between">
        <div className="text-center">
          <p className="font-semibold">We&apos;re always here to help</p>
          <p className="text-text-primary">
            You can get help by choosing from any of these options
          </p>
        </div>
        <div className="flex max-sm:mx-auto max-sm:flex-col flex-row gap-4 max-lg:justify-center ">
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-1"></div>
            <div>
              <p className="text-text-primary text-sm">Help Center</p>
              <p className="font-semibold">GameShop.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-1"></div>
            <div>
              <p className="text-text-primary text-sm">Phone</p>
              <p className="font-semibold">+909999999</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-1"></div>
            <div>
              <p className="text-text-primary text-sm">Email Support</p>
              <p className="font-semibold">support@gameshop.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
