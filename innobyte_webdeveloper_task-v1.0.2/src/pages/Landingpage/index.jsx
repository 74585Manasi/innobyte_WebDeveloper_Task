import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Slider } from "../../components";

export default function LandingpagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>innobyte_webDeveloper_task</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col mt-[45px] gap-[129px] md:gap-24 sm:gap-16">
          <div className="flex flex-col w-full mx-auto md:p-5 max-w-[1207px]">
            <header className="flex md:flex-col justify-between items-center w-[94%] md:w-full gap-5">
              <div className="flex items-center gap-2.5">
                <Img src="images/img_vector.svg" alt="vector_one" className="h-[36px] w-[35px]" />
                <Heading size="xs" as="h5">
                  LaslesVPN
                </Heading>
              </div>
              <div className="flex justify-between w-[40%] md:w-full gap-5 flex-wrap">
                <a href="About" target="_blank" rel="noreferrer" className="self-start">
                  <Text as="p">About</Text>
                </a>
                <a href="Features" target="_blank" rel="noreferrer" className="self-start">
                  <Text as="p">Features</Text>
                </a>
                <a href="Pricing" target="_blank" rel="noreferrer" className="self-end">
                  <Text as="p">Pricing</Text>
                </a>
                <a href="Testimonials" target="_blank" rel="noreferrer" className="self-start">
                  <Text as="p">Testimonials</Text>
                </a>
                <a href="Help" target="_blank" rel="noreferrer" className="self-end">
                  <Text as="p">Help</Text>
                </a>
              </div>
              <div className="flex items-center gap-[30px]">
                <a href="#" className="self-end mb-[11px]">
                  <Text as="p" className="!text-gray-900_01 !font-medium">
                    Sign In
                  </Text>
                </a>
                <Button color="red_A200" variant="outline" shape="round" className="sm:px-5 font-medium min-w-[150px]">
                  Sign Up
                </Button>
              </div>
            </header>
            <div className="flex md:flex-col items-center mt-[88px] gap-10">
              <div className="flex flex-col self-end w-[48%] md:w-full">
                <Heading size="md" as="h1" className="leading-[70px]">
                  Want anything to be easy with LaslesVPN.
                </Heading>
                <Text as="p" className="mt-5 !text-blue_gray-700_01 leading-[30px]">
                  <span className="text-blue_gray-700_01">
                    Provide a network for all your needs with ease and fun using&nbsp;
                  </span>
                  <span className="text-blue_gray-700_01 font-medium">
                    LaslesVPN discover interesting features from us.
                  </span>
                </Text>
                <div className="flex w-[45%] md:w-full mt-[50px]">
                  <div className="flex flex-col items-center w-full">
                    <Button size="xl" className="w-full sm:px-5 font-bold z-[1] rounded-[10px]">
                      Get Started
                    </Button>
                    <div className="h-[60px] w-[85%] mt-[-34px] bg-red-500_59 backdrop-opacity-[0.5] blur-[54.00px] rounded-[10px]" />
                  </div>
                </div>
              </div>
              <Img
                src="images/img_illustration_1.png"
                alt="illustrationone"
                className="w-[52%] md:w-full object-cover"
              />
            </div>
            <div className="h-[242px] w-[94%] mt-[102px] relative">
              <div className="h-[189px] w-[94%] bottom-[0.20px] right-0 left-0 m-auto bg-gray-900_5f backdrop-opacity-[0.06] blur-[114.00px] absolute rounded-[10px]" />
              <div className="flex md:flex-col justify-between items-center w-full top-[0.00px] right-0 left-0 gap-5 p-[37px] m-auto sm:p-5 bg-white-A700 absolute rounded-[10px] md:relative">
                <div className="flex justify-between items-center w-[15%] md:w-full ml-[53px] gap-5 md:ml-0">
                  <Button color="red_50" size="md" className="w-[55px] rounded-[27px]">
                    <Img src="images/img_heroicons_sm_user.svg" />
                  </Button>
                  <div className="flex flex-col items-start gap-[7px]">
                    <Heading as="h2">90+</Heading>
                    <Text size="lg" as="p" className="self-center">
                      Users
                    </Text>
                  </div>
                </div>
                <div className="flex justify-between items-center w-[31%] md:w-full gap-5">
                  <div className="h-full w-[2px] bg-blue_gray-50" />
                  <div className="flex justify-between items-center w-[62%] gap-5">
                    <Button color="red_50" size="md" className="w-[55px] rounded-[27px]">
                      <Img src="images/img_gridicons_location.svg" />
                    </Button>
                    <div className="flex">
                      <div className="flex flex-col items-start gap-[7px]">
                        <Heading as="h3">30+</Heading>
                        <Text size="lg" as="p">
                          Locations
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center w-[26%] md:w-full mr-[53px] gap-5 md:mr-0">
                  <div className="h-full w-[2px] bg-blue_gray-50" />
                  <div className="flex justify-between items-center w-[64%] gap-5">
                    <Button color="red_50" size="md" className="w-[55px] rounded-[27px]">
                      <Img src="images/img_bx_bxs_server.svg" />
                    </Button>
                    <div className="flex">
                      <div className="flex flex-col items-start gap-[7px]">
                        <Heading as="h4">50+</Heading>
                        <Text size="lg" as="p">
                          Servers
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-center w-[94%] md:w-full mt-[53px] ml-[34px] gap-5 md:ml-0">
              <Img src="images/img_illustration_2.svg" alt="illustrationtwo" className="h-[414px] md:w-full" />
              <div className="flex flex-col self-end w-[39%] md:w-full gap-[21px]">
                <Text size="2xl" as="p" className="w-[90%] md:w-full !text-gray-900_01 leading-[50px]">
                  We Provide Many Features You Can Use
                </Text>
                <Text as="p" className="!text-blue_gray-700_01 leading-[30px]">
                  You can explore the features that we provide with fun and have their own functions each feature.
                </Text>
                <div className="flex items-center gap-2.5">
                  <Img src="images/img_bx_bxs_check_circle.svg" alt="bxbxscheck_one" className="h-[24px] w-[24px]" />
                  <Text size="xs" as="p" className="self-end mb-0.5">
                    Powerfull online protection.
                  </Text>
                </div>
                <div className="flex items-center gap-2.5">
                  <Img src="images/img_bx_bxs_check_circle.svg" alt="bxbxscheck" className="h-[24px] w-[24px]" />
                  <Text size="xs" as="p">
                    Internet without borders.
                  </Text>
                </div>
                <div className="flex items-center gap-2.5">
                  <Img src="images/img_bx_bxs_check_circle.svg" alt="bxbxscheck_five" className="h-[24px] w-[24px]" />
                  <Text size="xs" as="p" className="self-end">
                    Supercharged VPN
                  </Text>
                </div>
                <div className="flex items-center gap-2.5">
                  <Img src="images/img_bx_bxs_check_circle.svg" alt="bxbxscheck" className="h-[24px] w-[24px]" />
                  <Text size="xs" as="p" className="self-end mb-0.5">
                    No specific time limits.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center overflow-auto">
            <div className="flex flex-col self-stretch items-center p-[29px] sm:p-5 bg-gradient">
              <div className="flex flex-col items-center w-[40%] md:w-full mt-[54px] gap-6">
                <Text size="2xl" as="p" className="!text-gray-900_01 text-center">
                  Choose Your Plan
                </Text>
                <Text as="p" className="!text-blue_gray-700_01 text-center leading-[30px]">
                  Let&#39;s choose the package that is best for you and explore it happily and cheerfully.
                </Text>
              </div>
              <div className="flex md:flex-col w-full mt-[60px] gap-[50px] mx-auto max-w-[1090px]">
                <div className="flex flex-col items-center w-full p-[50px] md:p-5 border-gray-300_03 border-2 border-solid bg-white-A700 rounded-[10px]">
                  <Img src="images/img_illustration_free.svg" alt="free_plan_one" className="h-[165px] mt-[29px]" />
                  <Text size="md" as="p" className="mt-[33px] !text-gray-900_01 text-center">
                    Free Plan
                  </Text>
                  <div className="flex flex-col self-start items-start mt-[37px] gap-4">
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="unlimited" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="!text-blue_gray-700_01">
                        Unlimited Bandwitch
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="image" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="self-end mb-0.5 !text-blue_gray-700_01">
                        Encrypted Connection
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="no_traffic_logs" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="self-end mb-0.5 !text-blue_gray-700_01">
                        No Traffic Logs
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="image_one" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="!text-blue_gray-700_01">
                        Works on All Devices
                      </Text>
                    </div>
                  </div>
                  <Text size="xl" as="p" className="mt-[133px] !text-gray-900_01 text-center">
                    Free
                  </Text>
                  <Button variant="outline" shape="round" className="mt-[19px] sm:px-5 font-bold min-w-[177px]">
                    Select
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full p-[50px] md:p-5 border-gray-300_03 border-2 border-solid bg-white-A700 rounded-[10px]">
                  <Img src="images/img_illustration_standard.svg" alt="illustration" className="h-[165px] mt-[29px]" />
                  <Text size="md" as="p" className="mt-[33px] !text-gray-900_01 text-center">
                    Standard Plan
                  </Text>
                  <div className="flex flex-col self-start items-start mt-[37px] gap-4">
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_one" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="!text-blue_gray-700_01">
                        Unlimited Bandwitch
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_three" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="self-end mb-0.5 !text-blue_gray-700_01">
                        Encrypted Connection
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_five" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="self-end mb-0.5 !text-blue_gray-700_01">
                        Yes Traffic Logs
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_seven" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="!text-blue_gray-700_01">
                        Works on All Devices
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_nine" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="self-end mb-0.5 !text-blue_gray-700_01">
                        Connect Anyware
                      </Text>
                    </div>
                  </div>
                  <Text size="xl" as="p" className="mt-[93px] !text-gray-900_01 text-center">
                    <span className="text-gray-900_01">$9&nbsp;</span>
                    <span className="text-blue_gray-700 font-normal">/ mo</span>
                  </Text>
                  <Button variant="outline" shape="round" className="mt-[19px] sm:px-5 font-bold min-w-[177px]">
                    Select
                  </Button>
                </div>
                <div className="flex flex-col items-center w-full p-[33px] sm:p-5 border-red-500 border-2 border-solid bg-white-A700 rounded-[10px]">
                  <Img src="images/img_illustration_premium.svg" alt="illustration" className="h-[165px] mt-[46px]" />
                  <Text size="md" as="p" className="mt-[33px] !text-gray-900_01 text-center">
                    Premium Plan
                  </Text>
                  <div className="flex flex-col self-start items-start mt-[37px] gap-4">
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_one" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="!text-blue_gray-700_01">
                        Unlimited Bandwitch
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_three" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="self-end mb-0.5 !text-blue_gray-700_01">
                        Encrypted Connection
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_five" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="self-end mb-0.5 !text-blue_gray-700_01">
                        Yes Traffic Logs
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_seven" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="!text-blue_gray-700_01">
                        Works on All Devices
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_nine" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="self-end mb-0.5 !text-blue_gray-700_01">
                        Connect Anyware
                      </Text>
                    </div>
                    <div className="flex items-center gap-5">
                      <Img src="images/img_jam_check.svg" alt="jamcheck_eleven" className="h-[24px] w-[24px]" />
                      <Text size="xs" as="p" className="!text-blue_gray-700_01">
                        Get New Features
                      </Text>
                    </div>
                  </div>
                  <Text size="xl" as="p" className="mt-[53px] !text-gray-900_01 text-center">
                    <span className="text-gray-900_01">$12&nbsp;</span>
                    <span className="text-blue_gray-700 font-normal">/ mo</span>
                  </Text>
                  <div className="flex justify-center w-[67%] md:w-full mt-[19px]">
                    <div className="flex flex-col items-center w-full">
                      <Button shape="round" className="w-full sm:px-5 font-bold z-[1]">
                        Select
                      </Button>
                      <div className="h-[45px] w-[72%] mt-[-28px] bg-red-500_59 backdrop-opacity-[0.5] blur-[54.00px] rounded-[22px]" />
                    </div>
                  </div>
                </div>
              </div>
              <Text
                size="2xl"
                as="p"
                className="w-[28%] md:w-full mt-[150px] !text-gray-900_01 text-center leading-[50px]"
              >
                Huge Global Network of Fast VPN
              </Text>
              <Text as="p" className="w-[40%] md:w-full mt-5 !text-blue_gray-700_01 text-center leading-[30px]">
                <span className="text-blue_gray-700_01">See&nbsp;</span>
                <span className="text-blue_gray-700_01 font-medium">
                  LaslesVPN everywhere to make it easier for you when you move locations.
                </span>
              </Text>
              <Img
                src="images/img_vector_gray_300_01.svg"
                alt="vector_three"
                className="h-[537px] w-full md:h-auto mt-[155px] mx-auto max-w-[1060px]"
              />
            </div>
            <div className="flex md:flex-col justify-between items-center w-full mt-1.5 gap-5 mx-auto md:p-5 max-w-[1135px]">
              <Img src="images/img_mask_group.png" alt="image" className="w-[18%] md:w-full object-cover" />
              <div className="flex md:flex-col justify-center items-center w-[57%] md:w-full">
                <Img
                  src="images/img_mask_group_50x156.png"
                  alt="image_one"
                  className="w-[25%] md:w-full object-cover"
                />
                <Img
                  src="images/img_mask_group_208x277.png"
                  alt="image_two"
                  className="w-[45%] md:w-full ml-5 md:ml-0 object-cover"
                />
                <Img
                  src="images/img_mask_group_63x187.png"
                  alt="image_three"
                  className="w-[30%] md:w-full ml-[3px] md:ml-0 object-cover"
                />
              </div>
              <Img src="images/img_mask_group_51x171.png" alt="image_four" className="w-[15%] md:w-full object-cover" />
            </div>
            <div className="flex justify-end w-[90%] md:w-full mt-[50px] md:p-5">
              <div className="flex flex-col w-full">
                <Text
                  size="2xl"
                  as="p"
                  className="w-[47%] md:w-full ml-[346px] md:ml-0 !text-gray-900_01 text-center leading-[50px]"
                >
                  Trusted by Thousands of Happy Customer
                </Text>
                <Text
                  as="p"
                  className="w-[55%] md:w-full mt-5 ml-[292px] md:ml-0 !text-blue_gray-700_01 text-center leading-[30px]"
                >
                  These are the stories of our customers who have joined us with great pleasure when using this crazy
                  feature.
                </Text>
                <div className="h-[350px] mt-[60px] relative">
                  <div className="h-[300px] w-[25%] left-[3%] top-[0.00px] m-auto bg-gray-900_5f backdrop-opacity-[0.06] blur-[114.00px] absolute rounded-[10px]" />
                  <div className="flex gap-5 bottom-[0.00px] right-[12%] m-auto absolute">
                    <Button size="lg" variant="outline" shape="circle" className="w-[60px] !rounded-[30px]">
                      <Img src="images/img_eva_arrow_back_fill.svg" />
                    </Button>
                    <Button
                      size="lg"
                      shape="circle"
                      className="w-[60px] border-red-500 border-2 border-solid shadow-xs !rounded-[30px]"
                    >
                      <Img src="images/img_eva_arrow_back_fill_white_a700.svg" />
                    </Button>
                  </div>
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                    paddingLeft={400}
                    paddingRight={390}
                    renderDotsItem={(props) => {
                      return props?.isActive ? (
                        <div className="w-[45px] h-[15px] mr-[15px] bg-red-500" />
                      ) : (
                        <div className="h-[15px] w-[15px] mr-[15px] bg-gray_300_04" />
                      );
                    }}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="w-full top-[0.00px] right-0 left-0 m-auto absolute"
                    items={[...Array(9)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="flex p-[30px] mx-2.5 sm:p-5 border-red-500 border-2 border-solid bg-white-A700 rounded-[10px]">
                          <div className="flex flex-col w-full gap-5">
                            <div className="flex justify-between items-center gap-5">
                              <div className="flex justify-center w-[54%]">
                                <div className="flex justify-center items-center w-full gap-5">
                                  <Img
                                    src="images/img_ellipse_175.png"
                                    alt="circleimage"
                                    className="h-[50px] w-[50px] rounded-[50%]"
                                  />
                                  <div className="flex flex-col items-start gap-0.5">
                                    <Text size="md" as="p" className="!text-gray-900_01 text-center">
                                      Viezh Robert
                                    </Text>
                                    <Text size="xs" as="p" className="text-center">
                                      Warsaw, Poland
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2.5">
                                <Text as="p" className="!text-gray-900_01">
                                  4.5
                                </Text>
                                <Img
                                  src="images/img_ant_design_star_filled.svg"
                                  alt="image"
                                  className="h-[16px] w-[16px]"
                                />
                              </div>
                            </div>
                            <Text as="p" className="!text-gray-900_01 leading-[30px]">
                              “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and
                              so far there have been no problems. LaslesVPN always the best”.
                            </Text>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>
            <footer className="flex flex-col self-stretch justify-center items-center mt-[65px]">
              <div className="h-[679px] w-[78%] md:h-auto relative">
                <div className="w-full">
                  <div className="flex md:flex-col justify-between items-center w-full gap-5 p-[57px] mx-auto md:p-5 z-[1] bg-white-A700 max-w-[1140px] rounded-[10px]">
                    <div className="flex flex-col items-start w-[37%] md:w-full ml-3 gap-[7px] md:ml-0">
                      <Text size="2xl" as="p" className="!text-gray-900_01 leading-[45px]">
                        Subscribe Now for Get Special Features!
                      </Text>
                      <Text as="p" className="!text-blue_gray-700_01">
                        Let&#39;s subscribe with us and find the fun.
                      </Text>
                    </div>
                    <div className="flex self-end justify-center w-[25%] md:w-full mb-[3px] mr-3 md:mr-0">
                      <div className="flex flex-col items-center w-full">
                        <Button size="xl" className="w-full sm:px-5 font-bold z-[1] rounded-[10px]">
                          Subscribe Now
                        </Button>
                        <div className="h-[60px] w-[85%] mt-[-34px] bg-red-500_59 backdrop-opacity-[0.5] blur-[54.00px] rounded-[10px]" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[-116px] px-14 py-[104px] md:p-5 bg-gray-50">
                    <div className="flex md:flex-col justify-between items-start w-full mt-[75px] gap-5 mx-auto max-w-[1140px]">
                      <div className="flex flex-col items-start w-[30%] md:w-full">
                        <div className="flex items-center gap-2.5">
                          <Img src="images/img_vector.svg" alt="vector_five" className="h-[36px] w-[35px]" />
                          <Heading size="xs" as="h5">
                            LaslesVPN
                          </Heading>
                        </div>
                        <Text as="p" className="mt-5 leading-[30px]">
                          LaslesVPN is a private virtual network that has unique features and has high security.
                        </Text>
                        <div className="flex mt-[30px] gap-5">
                          <Button size="xs" className="w-[33px] shadow-sm rounded-[16px]">
                            <Img src="images/img_socmed_facebook.svg" />
                          </Button>
                          <Button size="xs" className="w-[33px] shadow-sm rounded-[16px]">
                            <Img src="images/img_socmed_twitter.svg" />
                          </Button>
                          <Button size="xs" className="w-[33px] shadow-sm rounded-[16px]">
                            <Img src="images/img_socmed_instagram.svg" />
                          </Button>
                        </div>
                        <Text as="p" className="mt-[34px] !text-blue_gray-200 text-center">
                          <span className="text-blue_gray-200">©2020Lasles</span>
                          <span className="text-blue_gray-200 font-medium">VPN</span>
                        </Text>
                      </div>
                      <div className="flex justify-between items-center w-[50%] md:w-full mt-1.5 gap-5">
                        <div className="flex flex-col gap-[29px]">
                          <Text size="md" as="p" className="!text-gray-900_01">
                            Product
                          </Text>
                          <ul className="flex flex-col self-start items-start gap-[21px]">
                            <li>
                              <a href="#">
                                <Text as="p">Download </Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">Pricing</Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">Locations</Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">Server</Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">Countries</Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">Blog</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col items-start gap-[27px]">
                          <Text size="md" as="p" className="!text-gray-900_01">
                            Engage
                          </Text>
                          <ul className="flex flex-col items-start gap-5">
                            <li>
                              <a href="#">
                                <Text as="p">LaslesVPN ? </Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">FAQ</Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">Tutorials</Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">About Us</Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">Privacy Policy</Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">Terms of Service</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col self-start items-start gap-[27px]">
                          <Text size="md" as="p" className="!text-gray-900_01">
                            Earn Money
                          </Text>
                          <ul className="flex flex-col items-start gap-[21px]">
                            <li>
                              <a href="#">
                                <Text as="p">Affiliate</Text>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Text as="p">Become Partner</Text>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[250px] w-[96%] right-[-138.41px] top-[16.50px] m-auto bg-gray-900_5f backdrop-opacity-[0.06] blur-[114.00px] absolute rounded-[10px]" />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
