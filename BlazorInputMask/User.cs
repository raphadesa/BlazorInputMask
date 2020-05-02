using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorInputMask
{
    public class User
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [RegularExpression(@"^[0][1-9]([.][0-9][0-9]){4}", ErrorMessage="Incorrect phone number !")]
        public string Telephone { get; set; }

    }
}
