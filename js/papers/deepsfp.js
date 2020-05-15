var context = {
    Title: "Deep Shape from Polarization",
    Authors: [
      {
        Name: "Yunhao Ba",
        Link: "https://scholar.google.com/citations?user=J35vv0cAAAAJ&hl=en",
        AssociationNumber: 1
      },
      {
        Name: "Alex Gilbert",
        Link: "",
        AssociationNumber: 1
      },
      {
        Name: "Franklin Wang",
        Link: "",
        AssociationNumber: 1
      },
      {
        Name: "Jinfa Yang",
        Link: "",
        AssociationNumber: 2
      },
      {
        Name: "Rui Chen",
        Link: "",
        AssociationNumber: 2
      },
      {
        Name: "Yiqin Wang",
        Link: "",
        AssociationNumber: 1
      },
      {
        Name: "Lei Yan",
        Link: "https://sess.pku.edu.cn/english/people/researcharea/remote/270025.htm",
        AssociationNumber: 2
      },
      {
        Name: "Boxin Shi",
        Link: "http://ci.idm.pku.edu.cn/",
        AssociationNumber: 2
      },
      {
        Name: "Achuta Kadambi",
        Link: "https://visual.ee.ucla.edu/",
        AssociationNumber: 1
      }
    ],
    Associations: [
      {
        Name: "University of California, Los Angeles",
        Link: "http://www.ucla.edu/"
      },
      {
        Name: "Peking University",
        Link: "https://www.pku.edu.cn/"
      }
    ],
    // PublishSource: {
    //   Name: "",
    //   Link: ""
    // },
    Abstract:
      "This paper makes a first attempt to re-examine the shape from polarization (SfP) problem using physics-based deep learning. The previous state-of-the-art for SfP have been purely physics-based. We see value in these principled models, and blend these physical models as priors into a neural network architecture. This proposed approach achieves results that exceed the previous state-of-the-art on a challenging dataset we introduce. This dataset consists of polarization images taken over a range of object textures, paints, and lighting conditions. We report that our proposed method achieves the lowest test error on each tested condition in our dataset, showing the value of blending data-driven and physics-driven approaches alike.",
    // Bibtex: `@inproceedings{Arxiv_DeepSfP_Ba,<br>
    //       &nbsp;&nbsp;author = "Yunhao Ba and Alex Gilbert and Franklin Wang and Jinfa Yang and Rui Chen and Yiqin Wang and Lei Yan and Boxin Shi and Achuta Kadambi,<br>
    //       &nbsp;&nbsp;title = "Deep Shape from Polarization",<br>
    //       &nbsp;&nbsp;booktitle = "arXiv preprint arXiv:",<br>
    //       &nbsp;&nbsp;year = "2020"<br>
    //     }`,
    Press: [
      {
        Name: "Southern California Machine Learning Symposium",
        Link:
          "https://sites.google.com/view/socalml2019"
      }
    ],
    Files: [
      {
        Name: "Paper and Supplement",
        Links: [
          {
            Label: "PDF",
            Link: "https://sites.google.com/view/franklin-wang-publications/home"
          }
        ]
      },
      {
        Name: "Data Set with train/test list",
        Links: [
          {
            Label: "Link",
            Link: "https://drive.google.com/file/d/1_UL7URldcYy7Pj3VT_nrfz5MEiZoApz3/view"
          }
        ]
      },
      {
        Name: "Additional Objects Under Varied Indoor Lighting",
        Links: [
          {
            Label: "Link",
            Link: "https://drive.google.com/file/d/1PjRB0J6m7A9-_4zI7wDsrHw83sZoZr3U/view?usp=sharing"
          }
        ]
      }
    ],
  
    Contacts: `
      Achuta Kadambi<br>
      Assistant Professor<br>
      Electrical and Computer Engineering Department<br>
      achuta@ee.ucla.edu<br> 
    `,
  
    Photos: [
      {
        Link: "./img/deepsfp/pol.png",
        Caption:
          "Figure 1: Inherent ambiguities in shape from polarization."
      },
      {
        Link: "./img/deepsfp/setup_dataset.png",
        Caption: "Figure 3: Proposed dataset.",
      },
            {
        Link: "./img/deepsfp/F_PolarizationVsShading_small",
        Caption: "Figure 5: Our deep learning method learns from polarization cues, not just shading cues.",
      },
      {
        Link: "./img/deepsfp/Big_Result.png",
        Caption: "Figure 7: Comprehensive Results.",
      },
    ],
  
    Teaser: {
      imageURL: "./img/polarized3D/teasercrop.png",
      imageBackgroundURL: "./img/polarized3D/teasercrop-background.png",
      imageHeight: 555, //in pixels
      rawHTML: `
      <div class="caption">Figure 1: Starting from a coarse depth map, is it possible to achieve laser scan quality? By combining the information from the Kinect depth frame in (a) with information in 3 polarized photographs (b) , we reconstruct the 3D surface shown in (c). The subtle change between polarization images provides additional information about surface orientation. See Figure 2 of this website for a laser scan comparison.</div>
      `,
    },
    FAQ: [
        {
            Question: "What is Shape from Polarization?",
            Answer: "Today, photographers use polarizing filters on 2D cameras to create stunning photos. Polarized 3D probes the question: what if a polarizing filter is used on a 3D camera? The answer: commodity depth sensors operating at millimeter quality, can be enhanced to micron quality, improving resolution to 3 orders of magnitude.",
        },
        {
            Question: "How does a polarized 2D camera obtain 3D geometry?",
            Answer: "For about two centuries, the Fresnel equations have linked surface normals with material and polarimetric properties. However, such equations alone cannot solve for full 3D geometry. Our work is inspired by previous approaches in inverse rendering [Miyazaki03] and shape recovery [Atkinson06], but has a different goal: to recover full 3D shape. A sketch of our hardware is shown in Figure 3 of this website. ",   
        },
        {
          Question: "Does Polarized 3D operate in real-time?",
          Answer: "Although the acquisition can be made real-time (with a polarization mosaic), the computation is not yet real-time, requiring minutes to render 1 depth frame. We are exploring faster algorithms and GPU implementations to eventually arrive at 30 Hz framerates.",
        },
        {
          Question: "When will the software be available?",
          Answer: "We provide any form of software and hardware support as a courtesy to the research community, as the method is patent pending. However, on this project page, you can find a dataset as well as executable MATLAB code. The supplementary PDF has some instructions and MATLAB source snippets for your own implementations. We can provide additional datasets on request, but these have large filesizes. In rare cases, we may be able to scan an object that you are willing to mail us.",
        },
        {
          Question: "What are some consumer applications of this work?",
          Answer: "This is a new tool for 3D sensing and finds use in virtual reality, autonomous navigation, and industrial inspection. In particular, the proposed technique is suited in areas that require precise 3D depth (e.g. 3D scanning).",
        }
    ],
  };

function getTemplateAjax(path, callback) {
    var source;
    var template;
    $.ajax({
        url: path,
        success: function(data) {
            source    = data;
            template  = Handlebars.compile(source);

            //execute the callback if passed
            if (callback) callback(template);
        }
    });
}
Handlebars.registerHelper("AssociationsList", function(items, options) {
    var out = "";
  
    for (var i = 0, l = items.length; i < l; i++) {
      items[i].Number = i + 1;
      console.log(items[i].Number);
      out = out + options.fn(items[i]);
    }
    return out;
  });
  Handlebars.registerHelper("FileLinksList", function(items, options) {
    return options.fn(items);
  });
  Handlebars.registerHelper("RenderTeaser", function(Teaser) {
    return Teaser;
});

//run our template loader with callback
getTemplateAjax("js/templates/paper_template.html", function(template) {
    //do something with compiled template
    $("#SinglePaper").html(template(context));
});