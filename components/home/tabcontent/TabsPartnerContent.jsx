import { FaHandshake, FaBullhorn } from "react-icons/fa6"
import Image from "next/image"

const TabsPartnerContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="wrap-note-tpv2-main">
            <div className="wrap-note-content tw-relative">
              <span className="tw-float-right tw-opacity-[0.15] tw-text-black tw-mt-[-55px]"><FaBullhorn className="tw-w-14 tw-h-14"/></span>
              <h4>Would you like to Partner with virtualcomm.com</h4>
              <p> We have different types of partnership options you could choose from, moreover, you can add and partner with as many assets in the marketplace that suits your brand. <a href="https://contrib.com/partners/apply/virtualcomm.com" target="_blank">Send in your Partnership Application Today</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="m-portlet">
            <div className="m-portlet__head">
              <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                  <span className="m-portlet__head-icon">
                    <FaHandshake className="tw-w-5 tw-h-5" />
                  </span>
                  <h3 className="m-portlet__head-text">
                    <span className="mr-2">Virtualcomm.com</span>&nbsp; Partners
                  </h3>
                </div>
              </div>
            </div>
            <div className="m-portlet__body">
              <div className="grid grid-cols-3 gap-4" id="partners_ajax_content">
                <div className="flex flex-col">
                  <div className="mb-3 tw-relative">
                    <Image className="tw-object-contain tw-w-full" width={0} height={100} sizes="100vw"  src="http://cdn.vnoc.com/logos/image_logo-gventures10-420x60.png" alt="" />
                  </div>
                  <div>
                    <p>With over 17 years of internet experience, we built a network of over 20,000 websites and created dozens of successful businesses. We would love to work on the next cutting-edge projects with great companies and talented people.</p>
                  </div>
                  <div className="mt-auto">
                    <a href="http://globalventures.com" className="btn btn-block btn-primary" target="_blank"> GlobalVentures.com</a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mb-3 tw-relative">
                    <Image className="tw-object-contain tw-w-full" width={0} height={100} sizes="100vw"  src="http://cdn.vnoc.com/logos/logo-new-contrib-06.png" alt="" />
                  </div>
                  <div>
                    <p>We are a community of Entrepreneurs, Developers, Designers, Marketers and Specialists from around the world building, managing and monetizing virtual businesses on premium domains for equity and cash grants.</p>
                  </div>
                  <div className="mt-auto">
                    <a href="http://www.contrib.com" className="btn btn-block btn-primary" target="_blank"> Contrib.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabsPartnerContent