import React from "react";
import contact from "../../Styles/ProjectManagementPage.css";

const ProjectManagement = () => {
  return (
    <>
      {/* Banner Section Start Here */}
      <section className="services-hero" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        <div className="container">
          <div className="row">
            <div className="hero-wrp">
              <h1>Project Management</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End Here */}

      <section className="services-desc">
        <div className="container">
          <div className="row">
            <div className="col-md-12" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
              <div className="sr-text-wrp">
                <h2>OUR OFFERINGS</h2>
                <p>
                  Arab Field, a dynamic force in the energy sector, excels in
                  comprehensive project management for oil and gas ventures.
                  With a strategic focus on exploration, drilling, production,
                  and distribution, Arab Field optimizes resource allocation,
                  prioritizes safety and environmental compliance, and adapts to
                  industry dynamics. Utilizing cutting-edge technology, the
                  company emphasizes real-time monitoring, risk mitigation, and
                  quality assurance. Arab Field fosters a culture of innovation,
                  continuous improvement, and effective communication,
                  establishing itself as a leader in the sustainable and
                  efficient extraction and distribution of energy resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectManagement;
