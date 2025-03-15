<a id="readme-top"></a>
*This is just meant for fun. Do not take it too seriously. It's all nonsense :)*

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mfranco1/cms-nms">
    <img src="img/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Ermita Attractiveness Scale (EAS)</h3>
  <p align="center">
    v1.0.1
  <p align="center">
    Quantifying Facial Attractiveness for Improved Decision-Making
</div>
<br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><b>Table of Contents</b></summary>
  <ol>
    <li>
        <a href="#about-the-project">About The Project</a></li>
        <ul>
            <li><a href="#disclaimer">Disclaimer</a></li>
        </ul>
    <li>
        <a href="#the-ermita-attractiveness-scale">The Ermita Attractiveness Scale</a></li>
        <ul>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#writing-an-assessment">Writing an Assessment</a></li>
        </ul>
    <li>
        <a href="#modified-eas">Modified EAS</a>
        <ul>
            <li><a href="#writing-an-meas-assessment">Writing an mEAS Assessment</a></li>
            <li><a href="#negative-x-factor">Negative X Factor</a></li>
        </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

A standardized scale for quantifying facial attractiveness can be valuable in various fields, including psychology, aesthetics, and artificial intelligence. It provides an objective framework for studying human perception, enabling researchers to analyze the factors influencing attractiveness and their impact on social interactions and self-esteem. In medical and cosmetic fields, such a scale aids in assessing management outcomes, guiding surgical enhancements, and developing personalized aesthetic recommendations. Additionally, in Computer Vision, it supports the development of algorithms for facial recognition and beauty-related applications.

Here's why EAS is useful:

* It streamlines communication by allowing better understanding without direct visualization of a subject
* Simplicity makes it easy to adopt and use
* You should practice objective thinking and use of the scientific process in other aspects of your life

### Disclaimer

This scale provides a standardized quantitative measure of facial attractiveness but is inherently subjective and influenced by cultural, personal, and contextual factors. It should not be viewed as an absolute or definitive assessment, as **perceptions of beauty vary widely**. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all contributors who have helped expand this tool!

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- Explaining the Scale -->
## The Ermita Attractiveness Scale

The EAS includes two disctinct components:

1. Attractiveness with a mask (AMS)
2. Attractiveness without a mask (NMS)

Both scales run from 0-10, however, AMS is meant as a screening tool in the absence of enough data to determine a definitive NMS score.

<table>
  <tr>
    <td>⬅️ Less Attractive</td>
    <td>0</td>
    <td>😐</td>
    <td>😕</td>
    <td>😶</td>
    <td>🙂</td>
    <td>😀</td>
    <td>😃</td>
    <td>😄</td>
    <td>😁</td>
    <td>😆</td>
    <td>😎</td>
    <td>10</td>
    <td>More Attractive ➡</td>
  </tr>
</table>  ️  

<!-- USAGE EXAMPLES -->

### Usage

The following tables provide a structured framework for interpreting AMS and NMS scores, categorizing them into different risk levels, and guiding appropriate actions. It helps standardize decision-making by offering clear recommendations based on score ranges, ensuring consistency in assessments and interventions.

### AMS-based Decision-Making

| AMS Score | Classification       | Recommendation          |
|-----------|----------------------|-----------------------------|
| 0-5       | Deficient | No action needed       |
| 6-7       | Mild      | Further observation    |
| 8-9       | Moderate  | Consider intervention  |
| 10        | Severe    | Immediate intervention |

### NMS-based Decision-Making

| NMS Score | Classification       | Recommendation          |
|-----------|----------------------|-----------------------------|
| 0-4       | Deficient | No action needed         |
| 5-6       | Mild      | Further observation      |
| 7-8       | Moderate  | Consider intervention    |
| 9-10      | Severe    | Immediate intervention   |

### Writing an Assessment

This is what a sample assessment of *Person X* using EAS would look like:

| AMS-NMS score | Assessment |
| --- | --- |
| AMS 3, NMS unknown | **A>** Not Attractive, AMS 3 |
| AMS 7, NMS unknown | **A>** Attractive, mild, AMS 7 |
| AMS 8, NMS 5 | **A>** Attractive, mild, NMS 5 (AMS 8) |
| AMS 9, NMS 4 | **A>** Not Attractive, NMS 4 (AMS 9) |
| AMS unknown, NMS 2 | **A>** Not Attractive, NMS 2 |
| AMS unknown, NMS 9 | **A>** Attractive, severe, NMS 9 |

If there is insufficient data to compute an AMS or NMS score, we simply leave it out of the assessment.

When enough data is available for the determination of both AMS and NMS scores, **the NMS score will take precedence**. In such cases, the AMS score should still be included in parenthesis after the NMS score.

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- Modified EAS -->
## Modified EAS

The Modified Ermita Attractiveness Scale (mEAS) introduces an additional variable, known as an **X factor**, which accounts for intangible qualities that may not be captured by AMS or NMS alone. This factor includes elements such as charisma, confidence, or an unquantifiable appeal that significantly enhances perceived attractiveness. When present, the X factor can justify stepping up the recommended action for a given AMS or NMS classification, ensuring that assessments better reflect real-world attractiveness dynamics beyond physical features alone.

Explanation:

* X Factor Presence: If present, it elevates the classification by one level, making the attractiveness assessment more dynamic
* Adjusted Classification: Accounts for both AMS/NMS scores and the X factor’s influence
* Recommended Action: Steps up intervention if the X factor justifies it

### Writing an mEAS Assessment

| AMS Score | NMS Score | X Factor Presence | Assessment | Recommendation |
|---|---|---|---|---|
| 0-5 | 0-4 | No (0)   | A> Not Attractive, NMS 4 X0 (AMS 5)     | No action needed       |
| 0-5 | 0-4 | Yes (1)  | A> Attractive, mild, NMS 4 X1 (AMS 5)   | Further observation    |
| 6-7 | 5-6 | No (0)   | A> Attractive, mild, NMS 6 X0 (AMS 7)   | Further observation    |
| 6-7 | 5-6 | Yes (1)  | A> Attractive, moderate, NMS 6 X1 (AMS 7)    | Consider intervention   |
| 8-9 | 7-8 | No (0)   | A> Attractive, moderate, NMS 8 X0 (AMS 9)    | Consider intervention   |
| 8-9 | 7-8 | Yes (1)  | Attractive, severe, NMS 8 X1 (AMS 9)    | Immediate intervention |
| 10  | 9-10| No (0)   | Attractive, severe, NMS 10 X0 (AMS 10)  | Immediate intervention |
| 10  | 9-10| Yes (1)  | Attractive, extreme, NMS 10 X1 (AMS 10)   | Priority intervention   |

### Negative X Factor

The negative X factor (-X) in mEAS accounts for attributes that diminish perceived attractiveness beyond physical features. Unlike the positive X factor, which increments a subject's classification, the negative X factor steps down the assessment and recommended intervention due to factors such as poor hygiene, off-putting behaviors, etc. This ensures that the mEAS score reflects negative non-physical elements in addition to positive ones. If present, a negative X factor will reduce the classification by one level, refining the assessment to better align with real-world perceptions.

| Negative X Factor Presence | Assessment  | Recommendation |
|---|---|---|
| No       | A> Attractive, mild, NMS 5 X0 (AMS 6)      | Further observation             |
| Yes (-X) | A> Not Attractive, NMS 5 -X (AMS 6)        | No action needed           |
| No       | A> Attractive, severe, NMS 9 X0 (AMS 10)   | Immediate intervention  |
| Yes (-X) | A> Attractive, moderate, NMS 9 -X (AMS 10) | Consider intervention            |

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AwesomeFeature`)
3. Commit your Changes (`git commit -m 'Add AwesomeFeature'`)
4. Push to the Branch (`git push origin feature/AwesomeFeature`)
5. Open a Pull Request

See the [open issues](https://github.com/mfranco1/cms-nms/issues) for a full list of proposed features and known issues.

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- LICENSE -->
## License

Distributed under the Unlicense License. See `LICENSE` for more information.

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- CONTACT -->
## Contact

Project Link: [EAS guidelines](https://github.com/mfranco1/cms-nms)

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- Acknowledgements -->
## Acknowledgements

* Fellows of the Philippine Callroom Chika Society (FPCCS)

<p align="right"><a href="#readme-top">back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mfranco1/cms-nms.svg?style=for-the-badge
[contributors-url]: https://github.com/mfranco1/cms-nms/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mfranco1/cms-nms.svg?style=for-the-badge
[forks-url]: https://github.com/mfranco1/cms-nms/network/members
[stars-shield]: https://img.shields.io/github/stars/mfranco1/cms-nms.svg?style=for-the-badge
[stars-url]: https://github.com/mfranco1/cms-nms/stargazers
[issues-shield]: https://img.shields.io/github/issues/mfranco1/cms-nms.svg?style=for-the-badge
[issues-url]: https://github.com/mfranco1/cms-nms/issues
[license-shield]: https://img.shields.io/github/license/mfranco1/cms-nms.svg?style=for-the-badge
[license-url]: https://github.com/mfranco1/cms-nms/blob/master/LICENSE.txt
