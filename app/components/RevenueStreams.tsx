export default function RevenueStreams() {
  return (
    <section className="mt-20 sm:mt-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        The Four Revenue Streams
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden group">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs491kNiy3IuezP6g4KNAs6JkiOgK68SrMZuTydbbSHWV0hhbYOh4wngjG0oa629pnNZskT1O0MURjxTFVRwdWAhKOYSmvc_u2unUR8jy0v_YdRK1J1uXfVkhSPW9_BUKYrZ_LdbIyazBNrX7Kq6BSFV6aIR-1hHS1M3Itff9276L8bVK57LVtXouSnWebdMNakUyI6TmsAy0mRxdxcJjYk6NfcPkYkiqlWMbCRzc2mo5iWUDFWIn4dKpga0ds52XHq1lMaOpZow")`,
            }}
          />
          <div className="p-6">
            <h3 className="text-lg font-bold">Direct Customer Subscriptions</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Recurring revenue from waste collection services.
            </p>
          </div>
        </div>

        <div className="bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden group">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZ_WSn4z4t27vaxFVlbAF-HciI7wB6cRFOHfbhfsZ9iYF30jKu7nepUFsvn5SDwTWfa-4lpEX6xBhG7VkXe5DkhHhlnXOXOynS4hwGLCoogrNrI_V9CiUf0IGVByRlFftiY7bXAtPuilna9a6DX5EkTR2TRE26-CrpkieZf3PT9qUFkBt0vivkum4eEGzKRfZGDRj5FP_5ETpjr58RVOepvPJaApiZDsJjkfFlSVYxOudeKGz9VaJDTu7kl9ca9Et7Si8H5Cknhw")`,
            }}
          />
          <div className="p-6">
            <h3 className="text-lg font-bold">Resource Recovery</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Income from selling recovered materials.
            </p>
          </div>
        </div>

        <div className="bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden group">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFMDk9stx1SwtMX4jwCht7oWbhTzyzYR_-XneJFvlDOiUVGKurBugP7b7-rPOOnB43bVtu4ytFQKe85fQrBrAKBUY08oM6_2nUs5eRZ4qb77nsWUiWU7WvJwJQ-nRktF0NvBJQ0X0f7orckAd9Y9kVolUv1FjfisMLjY5zCvAfxMBWPuqG99Amzxrq1JrPqH15UHRFvQsvMnOdDB-GB3CRMroHobY-xTlnuIhnfXRo8-tqDWaxHm-TCpCZ8K4qJF5651ZmndcHRQ")`,
            }}
          />
          <div className="p-6">
            <h3 className="text-lg font-bold">ESG & Data Services</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Providing ESG data and consulting.
            </p>
          </div>
        </div>

        <div className="bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden group">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfSw-KS9Vzb0eub9Q_BJC_6VwmqHAAq0q3vhZkJFwIQjOnvzg54_1bZg4YwS1T_rkh-SpFaDh_WWpYbberYpA6FH6BNqCbgfEw5xEttd9VOiGzqWysvRmtgbhuLB-gv3_NNrAmS6sVFRTJ5k3_YpGh4FjKiNB6diCLcETqWl_puJoqgXPYssYlstwzFzifMHm_rCIdrw890de-B_GpbKuz3LCukgM4nlk4Ui7cqXIEIY9fEHDO41qqks5Ock9ItR3OJRo5YEjthw")`,
            }}
          />
          <div className="p-6">
            <h3 className="text-lg font-bold">
              Climate Finance & Carbon Credits
            </h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Revenue through carbon credits and climate finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
